import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbShopComponent } from './breadcrumb-shop.component';

describe('BreadcrumbShopComponent', () => {
  let component: BreadcrumbShopComponent;
  let fixture: ComponentFixture<BreadcrumbShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
