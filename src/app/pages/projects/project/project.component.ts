import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/types';

import Projects from 'src/assets/projects.json';

@Component({
    selector: 'projects-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectPage implements OnInit {
    launcher: Boolean = false;

    markdown: string = "";
    thumbnail: string = "";
    project!: Project;
    safeVideoUrl: SafeResourceUrl;

    constructor(private route: ActivatedRoute, private title: Title, private sanitizer: DomSanitizer) {
        const projects = new Map(Object.entries<Project>(Projects));

        this.project = Projects.filter(project => project.title === route.snapshot.params["project"])[0] as Project;
        this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/' + this.project.video);
    }

    async ngOnInit() {
        this.title.setTitle(this.project.title);
        this.markdown = "assets/" + this.project.title + "/Description.md";
        this.thumbnail = "assets/" + this.project.title + "/Thumbnail.png";

        this.route.queryParams.subscribe(async (params: any) => {
            this.launcher = params.launcher
        });
    }

    openButton() {
        window.open(this.project.link, "_self");
    }
}
