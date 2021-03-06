import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SprintsManagerService} from '@app/services/sprints-manager.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsManagerService} from '@app/services/projects-manager.service';
import {AppConstants} from '@app/app-constants';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {List} from 'linqts';
import {HttpParams} from '@angular/common/http';

declare const $: any;

@Component({
    selector: 'bepp-sprint',
    templateUrl: './sprint.component.html',
    styleUrls: ['./sprint.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SprintComponent implements OnInit {

    private projectName: string;

    private usToAdd: string[];

    private addTaskSubmitted: boolean;
    private addTaskLoading: boolean;

    public taskToEdit: number|null;

    public currentSprint: { [x: string]: any};

    public unselectedUS: Array<any>;

    public showSelectUS: boolean;
    public showAddTask: boolean;
    public showModifyTask: boolean;
    public addTaskForm: FormGroup;

    public selectUSLoading: boolean;

    public constructor(private sprintsManager: SprintsManagerService,
                       private activatedRoute: ActivatedRoute,
                       private router: Router,
                       private projectManager: ProjectsManagerService,
                       private httpClient: HttpClient) {
        this.showSelectUS = false;
        this.showAddTask = false;
        this.showModifyTask = false;

        this.addTaskSubmitted = false;
        this.addTaskLoading = false;

        this.selectUSLoading = false;

        this.unselectedUS = [];
        this.usToAdd = [];

        this.taskToEdit = null;

        this.addTaskForm = new FormGroup({
            task_desc: new FormControl('', [Validators.required]),
            task_difficulty: new FormControl('', [Validators.required]),
            related_tasks: new FormControl('', [Validators.required]),
            jh: new FormControl('', [Validators.required])
        });
    }

    private getSprintList(sprintNumber) {
        this.sprintsManager
            .get(this.projectName)
            .subscribe((sprints) => {
                this.currentSprint = null;
                if (sprints) {
                    let sprintIndex = 0;
                    while (this.currentSprint === null && sprintIndex < sprints.length) {
                        if (sprints[sprintIndex].number === sprintNumber) {
                            this.currentSprint = sprints[sprintIndex];
                        }
                        sprintIndex++;
                    }
                }

                if (!this.currentSprint) {
                    this.router.navigate([
                        `dashboard/projects/${encodeURIComponent(this.projectName)}/sprints`
                    ]);
                }
                else {
                    const startingDate = new Date(this.currentSprint.startingDate);
                    const time = this.currentSprint.time;

                    this.currentSprint.startingDate = startingDate;
                    this.currentSprint.endDate = new Date(startingDate.getTime() + time * 1000);
                }

                this.cleanUnselectedUS();
            });
    }

    private getUnselectedUSProject () {
        this.projectManager.get(this.projectName).subscribe ((project) => {
            this.unselectedUS = project.userStories;
            this.cleanUnselectedUS();
        });
    }

    private cleanUnselectedUS () {
        if (this.currentSprint && this.currentSprint.userStories && this.unselectedUS) {
            let list = new List<any>(this.unselectedUS);
            for (const usAlreadyAdded of this.currentSprint.userStories) {
                list = list.Where((item) => item.description !== usAlreadyAdded.description);
            }
            this.unselectedUS = list.ToArray();
        }
    }

    public ngOnInit(): void {
        this.projectName = this.activatedRoute.snapshot.parent.parent.params.name;
        this.getSprintList(this.activatedRoute.snapshot.params.sprintNumber);
        this.getUnselectedUSProject();
    }

    public toggleSelectUS() {
        this.showSelectUS = !this.showSelectUS;
    }

    public toggleAddTask() {
        this.addTaskSubmitted = false;
        this.showAddTask = !this.showAddTask;
    }

    public submitSelectUSForm() {
        if (!this.selectUSLoading && this.usToAdd.length > 0) {
            const usAdded = new Subject<boolean>();

            const usToAddCopy = this.usToAdd;

            usAdded.subscribe((result) => {
                console.log (usToAddCopy);
                if (usToAddCopy.length === 0  || !result) {
                    this.usToAdd = [];
                    this.toggleSelectUS();
                    this.getUnselectedUSProject();
                    this.getSprintList(this.activatedRoute.snapshot.params.sprintNumber);
                    this.selectUSLoading = false;
                }
            });

            for (const usDescription of this.usToAdd) {
                this.httpClient.put(
                    `/api/sprints/${this.currentSprint.number}/projects/${this.projectName}/userStories`, {
                        description: usDescription,
                        token: localStorage.getItem(AppConstants.ACCESS_COOKIE_NAME)
                    }
                ).subscribe(() => {
                    console.log (usDescription);
                    const index = usToAddCopy.indexOf(usDescription);
                    usToAddCopy.splice(index, 1);
                    usAdded.next(true);
                }, () => {
                    usAdded.next(false);
                });
            }
            this.toggleSelectUS();
        }
    }

    public submitAddTaskForm() {
        this.addTaskSubmitted = true;
        if (this.addTaskForm.valid && !this.addTaskLoading) {
            this.httpClient.put(
                `/api/sprints/${this.currentSprint.number}/projects/${this.projectName}/tasks/`, {
                    description: this.task_desc.value,
                    linkedTask: this.related_tasks.value,
                    estimatedTime: this.jh.value,
                    difficulty: this.task_difficulty.value,
                    token: localStorage.getItem(AppConstants.ACCESS_COOKIE_NAME)
                }).subscribe(() => {
                    this.toggleAddTask();
                    this.addTaskSubmitted = false;
                    this.addTaskLoading = false;
                    this.addTaskForm.reset();
                    this.getSprintList(this.currentSprint.number);
                });
        }
    }

    public submitDeleteTask(description) {
        this.httpClient.delete(
            `/api/sprints/${this.currentSprint.number}/projects/${this.projectName}/tasks/`, {
                params: new HttpParams()
                    .set('description', description)
                    .set('token', localStorage.getItem(AppConstants.ACCESS_COOKIE_NAME))
            }).subscribe(() => {
                this.getSprintList(this.currentSprint.number);
            });
    }

    public toggleModifyTask(numberTask) {
        this.taskToEdit = numberTask;
    }

    public ModifyTask(old) {
        /*this.httpClient.delete(
            `/api/sprints/${this.currentSprint.number}/projects/${this.projectName}/tasks/`, {
                params: new HttpParams()
                    .set('description', description)
                    .set('token', localStorage.getItem(AppConstants.ACCESS_COOKIE_NAME))
            }).subscribe(() => {
            this.getSprintList(this.currentSprint.number);
        });*/
    }

    public addUsToSprint (descriptionToAdd: string) {
        const index = this.usToAdd.indexOf(descriptionToAdd);
        if (index > -1) {
            this.usToAdd.slice(index, 1);
        }
        else {
            this.usToAdd.push(descriptionToAdd);
        }
    }

    public get task_desc () {
        return this.addTaskForm.get('task_desc');
    }

    public get task_difficulty () {
        return this.addTaskForm.get('task_difficulty');
    }


    public get related_tasks () {
        return this.addTaskForm.get('related_tasks');
    }

    public get jh () {
        return this.addTaskForm.get('jh');
    }

}
