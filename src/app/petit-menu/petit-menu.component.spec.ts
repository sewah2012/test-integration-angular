import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitMenuComponent } from './petit-menu.component';

describe('PetitMenuComponent', () => {
  let component: PetitMenuComponent;
  let fixture: ComponentFixture<PetitMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
