import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular6homeComponent } from './angular6home.component';

describe('Angular6homeComponent', () => {
  let component: Angular6homeComponent;
  let fixture: ComponentFixture<Angular6homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular6homeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular6homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
