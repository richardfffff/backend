import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSComponent } from './h-s.component';

describe('HSComponent', () => {
  let component: HSComponent;
  let fixture: ComponentFixture<HSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
