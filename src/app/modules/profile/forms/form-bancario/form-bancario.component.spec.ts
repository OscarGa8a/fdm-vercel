import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBancarioComponent } from './form-bancario.component';

describe('FormBancarioComponent', () => {
  let component: FormBancarioComponent;
  let fixture: ComponentFixture<FormBancarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBancarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBancarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
