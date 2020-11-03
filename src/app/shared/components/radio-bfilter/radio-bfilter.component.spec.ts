import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBFilterComponent } from './radio-bfilter.component';

describe('RadioBFilterComponent', () => {
  let component: RadioBFilterComponent;
  let fixture: ComponentFixture<RadioBFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioBFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioBFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
