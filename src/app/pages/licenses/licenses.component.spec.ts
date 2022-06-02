import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensesPage } from './licenses.component';

describe('LicensesComponent', () => {
    let component: LicensesPage;
    let fixture: ComponentFixture<LicensesPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LicensesPage]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LicensesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
