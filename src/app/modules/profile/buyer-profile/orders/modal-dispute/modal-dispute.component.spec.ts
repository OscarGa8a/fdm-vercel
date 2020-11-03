import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDisputeComponent } from './modal-dispute.component';

describe('ModalDisputeComponent', () => {
  let component: ModalDisputeComponent;
  let fixture: ComponentFixture<ModalDisputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDisputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
