import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDMiComponent } from './acerca-dmi.component';

describe('AcercaDMiComponent', () => {
  let component: AcercaDMiComponent;
  let fixture: ComponentFixture<AcercaDMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDMiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
