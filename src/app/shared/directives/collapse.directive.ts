import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective implements OnChanges {

  @Input() visibleContent: boolean;
  constructor(private el: ElementRef, private r2: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.openC(this.visibleContent);
  }

  openC(visible: boolean) {
    const content = this.el.nativeElement;
    if (visible) {
      this.r2.setStyle(content, 'max-height', `${content.scrollHeight}px`);
      setTimeout(() => {
        this.r2.setStyle(content, 'max-height', 'initial');
      }, 210);
    } else {
      this.r2.setStyle(content, 'max-height', `${content.scrollHeight}px`);
      setTimeout(() => {
        this.r2.setStyle(content, 'max-height', null);
      }, 20);
    }
  }
}
