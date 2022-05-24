import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = "Ethan Conneely";

    constructor(
        private readonly router: Router,
        private activatedRoute: ActivatedRoute,
        private readonly titleService: Title
    ) { }

    ngOnInit() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
        ).subscribe(() => {
            const rt = this.getChild(this.activatedRoute);
            rt.data.subscribe((data: any) => {
                let newTitle = this.title + " - " + data.title;
                this.titleService.setTitle(newTitle)
            });
        });
    }

    getChild(activatedRoute: ActivatedRoute): any {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        } else {
            return activatedRoute;
        }

    }
}
