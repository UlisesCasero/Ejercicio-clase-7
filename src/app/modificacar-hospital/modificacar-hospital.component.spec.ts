import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacarHospitalComponent } from './modificacar-hospital.component';

describe('ModificacarHospitalComponent', () => {
  let component: ModificacarHospitalComponent;
  let fixture: ComponentFixture<ModificacarHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacarHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificacarHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
