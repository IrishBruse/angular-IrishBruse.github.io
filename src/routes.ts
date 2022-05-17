import { Routes } from "@angular/router";
import { ErrorPage } from "pages/error/error.page";
import { HomePage } from "pages/home/home.page";
import { ProjectsPage } from "pages/projects/projects.page";

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full", },
    { path: "home", component: HomePage },
    { path: "projects", component: ProjectsPage },
    { path: "**", component: ErrorPage },
];
