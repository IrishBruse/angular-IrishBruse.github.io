import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePage } from 'pages/home/home.page';
import { ErrorPage } from 'pages/error/error.page';
import { ProjectsPage } from 'pages/projects/projects.page';
import { NavbarComponent } from 'components/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        ProjectsPage,
        NavbarComponent,
        ErrorPage,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
