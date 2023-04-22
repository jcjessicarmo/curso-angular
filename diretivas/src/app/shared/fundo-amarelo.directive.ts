import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) { 
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor='yellow'; Não é recomendavel utilizar por causa de vulnerabilidade

    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  }

}