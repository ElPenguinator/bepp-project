# bepp-project

Projet de l'UE **Conduite de Projet**

## Membres d'équipes :
* Adrien Bounader
* Mohamed Amine El Khadiri
* Dimitri Prestat
* Mathieu Perez

## Backlog 
### Rôles
* **Visiteur** : Personne sur l'application
* **Utilisateur** : Personne inscrite sur l'application
* **Développeur** : Personne qui participe au développement du projet
* **Product Owner** : Client du projet en développement
* **Observateur** : Personne ne participant pas mais regardant le déroulement du projet
* **Membre de projet**: Fusion de Développeur / Product Owner / Observateur

### Backlog

| ID | User Story | Difficulté | Priorité | Fait |
| --- | --- | --- | --- | --- |
| 1 | En tant que **visiteur**, je souhaite pouvoir créer un compte afin de me connecter.| 2 |  | X 
| 2 | En tant qu'**utilisateur**, je souhaite pouvoir créer un projet (Nom projet, Nom client, email contact client, description du projet, domaines/lieux, moyens/matériels, date début et deadLine, bugdet, motifs du projets (...) ) | 1 |  | X 
| 3 | En tant qu'**utilisateur**, je souhaite pouvoir accéder à la liste de mes projets.| 1 |  | X 
| 4 | En tant que **développeur**, je souhaite pouvoir inviter des utilisateurs en leur affectant un rôle (Product Owner / Developpeur / Observateur) afin d'avoir une équipe.| 2 |  | X
| 5 | En tant que **développeur**, je souhaite créer/modifier des backlogs ou minibacklogs afin de gérer les US du projet | 2 | | X
| 6 | En tant que **développeur**, je souhaite pouvoir ajouter une User Story (Description, Priorité, Difficulté (Suite de Fibonacci)) afin de l'intégrer au backlog.| 1 |  | X   
| 7 | En tant que **développeur**, je souhaite pouvoir ajouter une tâche (Intitulé, Difficulté) afin de la lier à ***une/plusieurs*** US. L'US sera découpée en une ou plusieurs tâches, chacune devant décrire une portion de l'US. Le lien se fera via la BDD.| 1 |  | X   
| 8 | En tant que **développeur**, je souhaite pouvoir modifier / supprimer une tâche.| 1 |  | X
| 9 | En tant que **développeur**, je souhaite pouvoir lier un fichier(code source) à une tâche(créer un lien dans la BDD qui permettent de retrouver facilement quel fichier est utilisé pour quelle tache).| 1 |  | X   
| 10 | En tant que **développeur**, je souhaite pouvoir gérer les dépendances entre les tâches.| 2 |  | X   
| 11 | En tant que **développeur**, je souhaite pouvoir générer un burndown chart.| 5 |  | X  
| 12 | En tant que **développeur**, je souhaite pouvoir modifier / supprimer une US| 1 |  | X
| 13 | En tant que **développeur**, je souhaite pouvoir organiser la durée et le nombre de sprints en début de projet(savoir combien de sprint seront à faire au cours du projets, en fonction du temps, des obligations envers le clients(réunions imposées tous les 15 jours, etc..), etc ..) afin de découper le projet en plusieurs sprint | 2 |  | X
| 14 | En tant que **développeur**, je souhaite pouvoir créer un sprint.| 1 |  | X
| 15 | En tant que **développeur**, je souhaite associer une ou plusieurs US à un sprint existant.| 1 |  | X
| 16 | En tant que **développeur**, je souhaite associer des tâches à un sprint existant.| 1 |  | X
| 17 | En tant que **développeur**, je souhaite m'affecter un ensemble de tâches sur un sprint afin de planifier mon Sprint| 2 |  | X
| 18 | En tant que **développeur**, je souhaite pouvoir changer l'état de mes tâches dans le kanban (et préciser la durée passé sur cette tache) | 1 |  | X
| 19 | En tant que **développeur**, je souhaite m'affecter à une tâche suspendu suite à une absence (TruckFactor) d'un collaborateur afin d'éviter le blocage des autres tâches | 2 |  | X
| 20 | En tant que **développeur**, je souhaite à la fin d'un sprint pouvoir effectuer des modifications sur le backlog ***(et/ou tâches)***.| 2 |  | X
| 21 | En tant que **développeur**, je souhaite pendant un sprint associer un build à un sprint| 1 |  | X
| 22 | En tant que **développeur**, je souhaite pendant un sprint associer des tests à une US et les relier aux tâches correspondantes | 1 |  | X
| 23 | En tant que **développeur**, je souhaite pendant un sprint associer une doc à une US [Spécification tâche ?] | 1 |  | X
| 24 | En tant que **développeur**, je souhaite pouvoir avertir l'équipe des problèmes rencontrés (dans une tâche en cours) afin d'avoir de l'aide, changer de tâche.| 3 |  | X
| 25 | En tant que **développeur**, je souhaite pendant un sprint, décrire les problèmes rencontrés et les solutions apportées afin d'avoir un suivi des problèmes.| 2 |  | X
| 26 | En tant que **membre de projet**, je souhaite visualiser la page du projet afin de visualiser l'ensemble des composants du projet ***[Segmenter en plusieurs US ?]***.| 3 |  | X
| 27 | En tant que **membre de projet**, je souhaite accéder à la liste des membres du projet | 1 |  | X
| 28 | En tant que **membre de projet**, je souhaite à la fin d'un sprint, accéder aux statistiques du sprint (Calculer la vitesse, le retard/avancement par tâche et le retard/avancement global par membre et pour l'équipe entière) ***[Segmenter en plusieurs US ?]{une seule US ->plusieurs taches}***.| 5 |  | X
| 29 | En tant que **membre de projet**, je souhaite accéder aux résultats des tests de chaque US par build.| 2 |  | X
| 30 | En tant que **membre de projet**, je souhaite visualiser le kanban afin d'avoir le suivi des tâches et de voir le RAF| 2 |  | X
| 31 | En tant que **Product Owner**, je souhaite accéder aux builds des sprints.| 2 |  | X
| 32 | En tant que **Product Owner**, je souhaite ajouter un cahier des charges pour le lier au projet.| 2 |  | X

## Technologies



