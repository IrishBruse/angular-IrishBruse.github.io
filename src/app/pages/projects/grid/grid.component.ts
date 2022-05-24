import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/types';

@Component({
    selector: 'projects-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

    projects: Project[] | undefined;

    constructor(private projectsService: ProjectsService) { }

    ngOnInit(): void {
        this.projectsService.getProjects().subscribe(data => {
            this.projects = data;

            this.projects.forEach(project => {
                let re = / /gi;
                project.url = project.title.replace(re, '_');
            });
        });
    }
}
