import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialRedesComponent } from './social-redes.component';

describe('SocialRedesComponent', () => {
  let component: SocialRedesComponent;
  let fixture: ComponentFixture<SocialRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialRedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
