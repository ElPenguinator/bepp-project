import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppConstants} from "../../../../../app-constants";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './overview-container.component.html',
    styleUrls: ['./overview-container.component.css']
})
export class OverviewContainerComponent implements OnInit {

    showAddMember = false;

    private loading: boolean;

    private currentProject: any;

    constructor(private httpClient: HttpClient,
                private activatedRoute: ActivatedRoute) {
        this.loading = true;
    }

    public ngOnInit(): void {
        this.loading = true;

        this.activatedRoute.parent.params.subscribe((params) => {
            let httpParams = new HttpParams()
                .set('token', localStorage.getItem(AppConstants.ACCESS_COOKIE_NAME));

            this.httpClient.get(`/api/projects/${params['name']}`,
                {
                    params: httpParams,
                    responseType: 'json'
                }
            ).subscribe((response: any) => {
                this.loading = false;
                this.currentProject = response[0];
                this.currentProject.users = [];
            }, (error) => {
                this.loading = false;

                console.log ("error")
                console.log (error)
            });
        });
    }

    toggleAddMember() {
        //TODO: get members from the API
        this.showAddMember = !this.showAddMember;
    }

    AddMember() {
        //TODO: associate member to project on the API
        this.showAddMember = !this.showAddMember;
    }
}