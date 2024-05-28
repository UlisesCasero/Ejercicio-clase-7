import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalNuevoComponent } from './hospital-nuevo.component';

describe('HospitalNuevoComponent', () => {
  let component: HospitalNuevoComponent;
  let fixture: ComponentFixture<HospitalNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalNuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
