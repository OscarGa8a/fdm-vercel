import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-radio-bfilter',
  templateUrl: './radio-bfilter.component.html',
  styleUrls: ['./radio-bfilter.component.css']
})
export class RadioBFilterComponent implements OnInit, OnDestroy {

  @Input() elements: Array<any>;
  @Output() selected = new EventEmitter<string>();
  /*form: FormGroup;*/
  @Input() controlName: FormControl;
  @Input() name: string;
  unsubscribe$ = new Subject();
  /*Estado que agrega o elimina la clase CSS clear del botón todos*/
  clear = false;

  constructor(private fb: FormBuilder) {
/*    this.form = this.fb.group({
      material: ['']
    });*/
  }

  ngOnInit(): void {
    this.controlName.valueChanges.pipe(takeUntil(this.unsubscribe$))
        .subscribe(x => {
          this.selected.emit(x);
          this.clear = false;
        });
  }

  clearControl() {
    this.controlName.reset();
    this.clear = true;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
