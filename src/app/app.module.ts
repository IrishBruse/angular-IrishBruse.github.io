import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { GithubProfileComponent } from './pages/home/github-profile/github-profile.component';

// Pages
import { HomePage } from './pages/home/home.component';
import { ErrorPage } from './pages/error/error.component';
import { ProjectsPage } from './pages/projects/projects.component';

// External imports
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './pages/home/about/about.component';
import { ProjectPage } from './pages/projects/project/project.component';
import { GridComponent } from './pages/projects/grid/grid.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        CarouselComponent,
        GithubProfileComponent,

        HomePage,
        ProjectsPage,
        ErrorPage,
        AboutComponent,
        ProjectPage,
        GridComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
