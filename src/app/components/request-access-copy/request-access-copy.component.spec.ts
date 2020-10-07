import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAccessCopyComponent } from './request-access-copy.component';

describe('RequestAccessCopyComponent', () => {
  let component: RequestAccessCopyComponent;
  let fixture: ComponentFixture<RequestAccessCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAccessCopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAccessCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
