import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Project } from 'src/types';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    constructor(private http: HttpClient) { }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>("assets/projects.json");
    }

    getFeatured(): Observable<Project[]> {
        return this.http.get<Project[]>("assets/projects.json").pipe(
            map(projects => projects.filter(project => project.featured)),
        );
    }

}
