import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProfilePhotoComponent } from './upload-profile-photo.component';

describe('UploadProfilePhotoComponent', () => {
  let component: UploadProfilePhotoComponent;
  let fixture: ComponentFixture<UploadProfilePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProfilePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProfilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
