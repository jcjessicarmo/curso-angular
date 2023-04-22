import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { VirtualAction } from 'rxjs';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {

@Input() set appNgElse(condition: boolean){
  if (!condition){
    this._viewContainerRef.createEmbeddedView(this._templateRef);
  } else {
    this._viewContainerRef.clear();
  }
}

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}
