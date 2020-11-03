import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSortingComponent } from './select-sorting.component';

describe('SelectSortingComponent', () => {
  let component: SelectSortingComponent;
  let fixture: ComponentFixture<SelectSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
