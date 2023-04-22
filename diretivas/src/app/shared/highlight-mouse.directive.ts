import { Directive, HostListener, HostBinding, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
      this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = " " ;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor(
    private _elementRef: ElementRef,
    private _render: Renderer2
  ) { }

   ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
