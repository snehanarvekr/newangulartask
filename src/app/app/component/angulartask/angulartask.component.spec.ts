import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulartaskComponent } from './angulartask.component';

describe('AngulartaskComponent', () => {
  let component: AngulartaskComponent;
  let fixture: ComponentFixture<AngulartaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulartaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulartaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
