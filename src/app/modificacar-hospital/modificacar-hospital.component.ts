import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalesService } from 'src/services/hospital.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hospital } from 'src/models/hospital';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

@Component({
  selector: 'app-modificacar-hospital',
  templateUrl: './modificacar-hospital.component.html',
  styleUrls: ['./modificacar-hospital.component.scss']
})
export class ModificacarHospitalComponent implements OnInit {
  hospitalForm: FormGroup;
  hospitalId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private hospitalesSVC: HospitalesService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ModificacarHospitalComponent>
  ) {
    this.hospitalId = data;
    this.hospitalForm = this.fb.group({
      nombre: [''],
      direccion: [''],
    });
  }

  ngOnInit(): void {
    this.hospitalesSVC.getHospitalId(this.hospitalId).subscribe({
      next: (hospital: Hospital) => {
        this.hospitalForm.patchValue({
          nombre: hospital.name,
          direccion: hospital.direccion,
        });
      },
      error: (error) => {
        console.error('Error al obtener el hospital', error);
      }
    });
  }

  onSubmit(): void {
    const modificarHospital: Hospital = {
      id: this.hospitalId,
      ...this.hospitalForm.value
    };
    this.hospitalesSVC.mod(modificarHospital).subscribe({
      next: () => {
        this.snackBar.open('Hospital modificado exitosamente', 'Cerrar', {
          duration: 3000,
        });
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Error al modificar el hospital', error);
        this.snackBar.open('Error al modificar el hospital', 'Cerrar', {
          duration: 3000,
        });
      },
    });
  }
}