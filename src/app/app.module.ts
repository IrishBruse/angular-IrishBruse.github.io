import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.component';
import { ProjectsPage } from './pages/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorPage } from './pages/error/error.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        ProjectsPage,
        NavbarComponent,
        ErrorPage,
        CarouselComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
