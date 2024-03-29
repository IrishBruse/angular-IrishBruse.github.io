import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit {
    yearsProgramming: number = 0;
    age: number = 0;
    constructor() { }

    ngOnInit(): void {
        this.yearsProgramming = new Date(Date.now()).getFullYear() - 2012;
        this.age = new Date(Date.now()).getFullYear() - 2002;
    }

}
