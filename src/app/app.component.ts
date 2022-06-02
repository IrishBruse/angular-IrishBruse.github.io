import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = "Ethan Conneely";

    launcher: Boolean = false;

    constructor(
        private readonly router: Router,
        private activatedRoute: ActivatedRoute,
        private readonly titleService: Title
    ) { }

    async ngOnInit() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
        ).subscribe(() => {
            const rt = this.getChild(this.activatedRoute);
            rt.data.subscribe((data: any) => {
                let newTitle = data.title + " - " + this.title;
                this.titleService.setTitle(newTitle)
            });
        });

        this.activatedRoute.queryParams.subscribe(async (params: any) => {
            this.launcher = params.launcher
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
