import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'image-viewer',
    templateUrl: './image-viewer.component.html',
    styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

    @Input() project: string = "";

    screenshots: string[] = ['Screenshot1.png', 'Screenshot2.png', 'Screenshot3.png'];

    constructor() { }

    ngOnInit(): void {
        // this.screenshots
    }

    open(target: EventTarget | null) {
        const targetElement = target as HTMLImageElement;
        window.open(targetElement.src, '_blank');
    }

}
