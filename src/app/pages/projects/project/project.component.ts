import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'projects-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectPage implements OnInit {

    name: string = "";
    localDate: Date = new Date("2002-12-12");
    markdown: string = "";

    constructor(private route: ActivatedRoute, private title: Title) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.name = (params as any).project;
            let re = /_/gi;
            this.localDate.toLocaleDateString()
            this.name = this.name.replace(re, ' ');
            this.title.setTitle(this.name);
            this.markdown = "assets/" + this.name + "/Description.md";
        });
    }

}
