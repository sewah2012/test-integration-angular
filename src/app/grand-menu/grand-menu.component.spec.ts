import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandMenuComponent } from './grand-menu.component';

describe('GrandMenuComponent', () => {
  let component: GrandMenuComponent;
  let fixture: ComponentFixture<GrandMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
