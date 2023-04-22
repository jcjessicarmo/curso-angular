import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
      this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = " " ;

  @Input('') defaultColor: string = 'white';
  @Input('appHighlightDirective') highlightColor: string = 'yellow'

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
