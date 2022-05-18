import { Component, ElementRef, ViewChild } from '@angular/core';
import { Octokit } from '@octokit/rest';
import KeenSlider, { KeenSliderInstance } from "keen-slider";

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
    @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

    currentSlide: number = 2;
    dotHelper: Array<Number> = [];
    slider!: KeenSliderInstance;

    ngAfterViewInit() {
        setTimeout(() => {
            this.slider = new KeenSlider(this.sliderRef.nativeElement, {
                loop: true,
                initial: this.currentSlide,
                slideChanged: (s) => {
                    this.currentSlide = s.track.details.rel
                },
            })
            this.dotHelper = [
                ...Array(this.slider.track.details.slides.length).keys(),
            ]
        }, 1)

        setInterval(() => {
            this.slider.next()
        }, 7000)
    }

    ngOnDestroy() {
        if (this.slider) this.slider.destroy()
    }
}
