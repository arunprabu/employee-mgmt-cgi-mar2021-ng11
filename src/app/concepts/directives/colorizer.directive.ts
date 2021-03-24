import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { // Dependency Injection
    console.log('Inside Constructor');

    console.log(this.elRef.nativeElement);

    let el = this.elRef.nativeElement;
    // el.style.backgroundColor = 'red';

    this.renderer.setStyle(el, 'background-color', 'red');
    this.renderer.setStyle(el, 'height', '300px');

    // TODO: Learn about @HostListener()
    // TODO: Learn about @HostBinding()
  }

  @HostListener('click', ['$event'])
  onElementClick( event: any ): void{
    console.log(event);
    this.renderer.setStyle(event.target, 'background-color', 'yellow');
  }

  @HostListener('mouseover', ['$event'])
  onElementMouseover( event: any ): void{
    console.log(event);
    this.renderer.setStyle(event.target, 'background-color', 'green');
  }


}
