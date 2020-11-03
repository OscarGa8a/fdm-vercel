import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    @ViewChild('content', {static: false}) content: ElementRef;
    visible = true;

    constructor(private r2: Renderer2) { }


  ngOnInit() {
  }
    // collapse toggle

    open() {
        const content = this.content.nativeElement;
        if (!this.visible) {
            this.renderContent(content);
        } else {
            this.r2.setStyle(content, 'max-height', `${content.scrollHeight}px`);
            setTimeout(() => {
                this.r2.setStyle(content, 'max-height', null);
            }, 20);
        }
        this.visible = !this.visible;
    }

    renderContent(content) {
        this.r2.setStyle(content, 'max-height', `${content.scrollHeight}px`);
        setTimeout(() => {
            this.r2.setStyle(content, 'max-height', 'initial');
        }, 210);
    }
    // For mobile view
  public mobileFilterBack() {
     $('.collection-filter').css('left', '-365px');
  }

}
