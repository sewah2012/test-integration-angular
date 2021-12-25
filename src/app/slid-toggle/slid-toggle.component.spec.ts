import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidToggleComponent } from './slid-toggle.component';

describe('SlidToggleComponent', () => {
  let component: SlidToggleComponent;
  let fixture: ComponentFixture<SlidToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
