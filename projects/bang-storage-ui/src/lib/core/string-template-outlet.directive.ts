import {Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[storageStringTemplateOutlet]'
})
export class StringTemplateOutletDirective {
  private isTemplate: boolean;
  private inputTemplate: TemplateRef<void> | null = null;
  private inputViewRef: EmbeddedViewRef<void> | null = null;
  private defaultViewRef: EmbeddedViewRef<void> | null = null;

  constructor(
    private _viewContainer: ViewContainerRef,
    private _defaultTemplate: TemplateRef<void>
  ) {
  }

  @Input()
  set storageStringTemplateOutlet(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this.isTemplate = true;
      this.inputTemplate = value;
    } else {
      this.isTemplate = false;
    }
    this.updateView();
  }

  updateView(): void {
    if (!this.isTemplate) {
      /** use default template when input is string **/
      if (!this.defaultViewRef) {
        this._viewContainer.clear();
        this.inputViewRef = null;
        if (this._defaultTemplate) {
          this.defaultViewRef = this._viewContainer.createEmbeddedView(this._defaultTemplate);
        }
      }
    } else {
      /** use input template when input is templateRef **/
      if (!this.inputViewRef) {
        this._viewContainer.clear();
        this.defaultViewRef = null;
        if (this.inputTemplate) {
          this.inputViewRef = this._viewContainer.createEmbeddedView(this.inputTemplate);
        }
      }
    }
  }
}
