import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPage } from './pages/error/error.component';
import { HomePage } from './pages/home/home.component';
import { ProjectsPage } from './pages/projects/projects.component';

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full", },
    { path: "home", component: HomePage },
    { path: "projects", component: ProjectsPage },
    { path: "**", component: ErrorPage },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
