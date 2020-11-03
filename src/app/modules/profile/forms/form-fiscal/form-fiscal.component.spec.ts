import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFiscalComponent } from './form-fiscal.component';

describe('FormFiscalComponent', () => {
  let component: FormFiscalComponent;
  let fixture: ComponentFixture<FormFiscalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFiscalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
