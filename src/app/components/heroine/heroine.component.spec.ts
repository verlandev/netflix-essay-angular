import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroineComponent } from './heroine.component';

describe('HeroineComponent', () => {
  let component: HeroineComponent;
  let fixture: ComponentFixture<HeroineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
