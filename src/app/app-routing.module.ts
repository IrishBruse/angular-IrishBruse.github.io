import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPage } from './pages/error/error.component';
import { HomePage } from './pages/home/home.component';
import { GridPage } from './pages/projects/grid/grid.component';
import { ProjectPage } from './pages/projects/project/project.component';
import { ProjectsPage } from './pages/projects/projects.component';

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full", },
    { path: "home", component: HomePage, data: { title: "Home" } },
    {
        path: "projects",
        component: ProjectsPage,
        data: { title: "Projects" },
        children: [
            {
                path: "",
                component: GridPage
            },
            {
                path: ":project",
                component: ProjectPage
            }
        ]
    },
    { path: "*", component: ErrorPage, data: { title: "404" } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
