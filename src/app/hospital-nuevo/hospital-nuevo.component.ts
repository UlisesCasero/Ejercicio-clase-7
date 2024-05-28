import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalesService } from 'src/services/hospital.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hospital } from 'src/models/hospital';

@Component({
  selector: 'app-hospital-nuevo',
  templateUrl: './hospital-nuevo.component.html',
  styleUrls: ['./hospital-nuevo.component.scss'],
})
export class HospitalNuevoComponent implements OnInit {
  hospitalForm: FormGroup;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(
    private fb: FormBuilder,
    private hospitalesSVC: HospitalesService,
    private snackBar: MatSnackBar
  ) {
    this.hospitalForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.hospitalForm.valid) {
      const nuevoHospital: Hospital = this.hospitalForm.value;
      this.hospitalesSVC.add(nuevoHospital).subscribe({
        next: (data) => {
          this.snackBar.open('Hospital creado exitosamente', 'Cerrar', {
            duration: 3000,
          });
          this.hospitalForm.reset();
        },
        error: (error) => {
          console.error('Error al crear el hospital', error);
          this.snackBar.open('Error al crear el hospital', 'Cerrar', {
            duration: 3000,
          });
        },
      });
    }
  }
}
