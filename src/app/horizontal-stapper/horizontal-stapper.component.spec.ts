import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalStapperComponent } from './horizontal-stapper.component';

describe('HorizontalStapperComponent', () => {
  let component: HorizontalStapperComponent;
  let fixture: ComponentFixture<HorizontalStapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalStapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalStapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
