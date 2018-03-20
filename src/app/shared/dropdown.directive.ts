import { Directive, HostBinding, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // Second approach using HostBinding 
    @HostBinding('class.open') isOpen = false;
    
    constructor(private elemntRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('click') onDropdownClick(eventData: Event) {
        // First approach using renderer
        // this.renderer[this.isOpen ? 'removeClass' : 'addClass'](this.elemntRef.nativeElement, 'open');
        this.isOpen = !this.isOpen;
    }
}