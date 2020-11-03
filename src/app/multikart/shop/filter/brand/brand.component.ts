import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    Renderer2,
    ViewChild
} from '@angular/core';
import { ProductTags, TagFilter } from '../../../../shared/classes/product';
declare var $: any;

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit, AfterViewInit {

    // Using Input nad Output EventEmitter
    @Input() tagsFilters: ProductTags[] = [];
    @Output() tagFilters: EventEmitter<ProductTags[]> = new EventEmitter<ProductTags[]>();

    // Array
    public checkedTagsArray: any[] = [];
    visible = true;

    @ViewChild('content', {static: false}) content: ElementRef;

    constructor(private r2: Renderer2) {
    }

    ngOnInit() {
        this.tagFilters.emit(this.checkedTagsArray);   // Pass value Using emit
    }

    ngAfterViewInit(): void {
        this.renderContent(this.content.nativeElement);
    }

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
    // value checked call this function
    checkedFilter(event) {
        const index = this.checkedTagsArray.indexOf(event.target.value);  // checked and unchecked value
        if (event.target.checked) {
            this.checkedTagsArray.push(event.target.value);
        } else {
            this.checkedTagsArray.splice(index, 1);
        }  // removed in array unchecked value
    }
}
