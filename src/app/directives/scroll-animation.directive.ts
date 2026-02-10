
import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appScrollAnimation]',
    standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
    @Input('appScrollAnimation') animationClass: string = '';
    @Input() threshold: number = 0.1;

    private observer: IntersectionObserver | undefined;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.el.nativeElement.style.opacity = '0';
        this.el.nativeElement.classList.add('hidden-section');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: this.threshold
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.el.nativeElement.classList.remove('hidden-section');
                    this.el.nativeElement.classList.add(this.animationClass);
                    this.el.nativeElement.style.opacity = '1';
                    if (this.observer) {
                        this.observer.unobserve(entry.target);
                    }
                }
            });
        }, options);

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
