import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    yearsProgramming: number = 0;
    age: number = 0;
    constructor() { }

    ngOnInit(): void {
        this.yearsProgramming = new Date(Date.now()).getFullYear() - 2012;
        this.age = new Date(Date.now()).getFullYear() - 2002;
    }

}
