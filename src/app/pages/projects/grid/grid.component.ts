import { Component, OnInit } from '@angular/core';
import { Project } from 'src/types';

import Projects from 'src/assets/projects.json';

@Component({
    selector: 'projects-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridPage {

    projects: Project[] | undefined;

    constructor() { }



    ngOnInit(): void {
        this.projects = Projects as Project[];
    }
}
