import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'licenses',
    templateUrl: './licenses.component.html',
    styleUrls: ['./licenses.component.scss']
})
export class LicensesPage implements OnInit {
    text = "";
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get("3rdpartylicenses.txt").subscribe((data: any) => {
            this.text = data;
        })
    }

}
