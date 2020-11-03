import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.css']
})
export class StylesComponent implements OnInit, AfterViewInit, OnDestroy {

  visibleProp = true;
/*  form: FormGroup;*/
  unsubscribe$ = new Subject();

  style = new FormControl('');
  prop = new FormControl('');

  @ViewChild('content', {static: false}) content: ElementRef;

  constructor(private r2: Renderer2, private fb: FormBuilder) {
 /*   this.form = this.fb.group({
      style: ['']
    });
    this.form.valueChanges.pipe(takeUntil(this.unsubscribe$))
        .subscribe(x => {
          console.log(x.style);
        });*/
  }

  stylesData = [
    {
      id: '1',
      value: 'acuarela'
    },
    {
      id: '2',
      value: 'lettering'
    },
    {
      id: '3',
      value: 'comic'
    },
    {
      id: '4',
      value: 'digital'
    },
    {
      id: '5',
      value: 'manga'
    },
  ];

  propData = [
    {
      id: 'p2',
      value: 'Diseños de color editable'
    },
      {
        id: 'p1',
        value: 'Productos multidiseño'
      }
      ];
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.renderContent(this.content.nativeElement);
  }

  saveData(data) {
    console.log(data);
  }

  saveProp(data) {
    console.log(data);
  }

  openProp() {
    this.visibleProp = !this.visibleProp;
  }

  open() {
    const content = this.content.nativeElement;
    if (!content.style.maxHeight) {
     this.renderContent(content);
    } else {
      this.r2.setStyle(content, 'max-height', `${content.scrollHeight}px`);
      this.r2.setStyle(content, 'padding-bottom', `0`);
      this.r2.setStyle(content, 'overflow', 'hidden');
      setTimeout(() => {
        this.r2.setStyle(content, 'max-height', null);
      }, 20);
    }
  }

  renderContent(content) {
    this.r2.setStyle(content, 'max-height', `${content.scrollHeight}px`);
    this.r2.setStyle(content, 'padding-bottom', `1rem`);
    setTimeout(() => {
      this.r2.setStyle(content, 'max-height', 'initial');
    }, 220);
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
