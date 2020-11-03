import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomClothes.PageComponent } from './custom-clothes.page.component';

describe('CustomClothes.PageComponent', () => {
  let component: CustomClothes.PageComponent;
  let fixture: ComponentFixture<CustomClothes.PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomClothes.PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomClothes.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
