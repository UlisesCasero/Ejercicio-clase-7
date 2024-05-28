import { Component, OnInit } from '@angular/core';
import { HospitalesService } from '../../services/hospital.service' ;
import { Hospital } from '../../models/hospital'; 
import { ModificacarHospitalComponent } from '../modificacar-hospital/modificacar-hospital.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.scss']
})

export class HospitalesComponent implements OnInit {
  public lista: Hospital[] = [];

  constructor(private snackBar: MatSnackBar, private hospitalCVS: HospitalesService, public dialog: MatDialog, private router: Router) { }

  public hospitals: Hospital[] = [];
  public displayedColumns: string[] = ['id', 'nombre', 'direccion', 'acciones'];

  ngOnInit(): void {
    this.hospitalCVS.get().subscribe({
      next: (data) => {
        this.hospitals = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ModificarHospital(hospitalId: any) {
    const Id: number = Number(hospitalId);
    const dialogRef = this.dialog.open(ModificacarHospitalComponent, {
      width: '390px',
      data: Id
    });
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/hospitales']);  
    });
  }

  EliminarHospital(hospitalId: number) {
    this.hospitalCVS.delete(hospitalId).subscribe({
      next: () => {
        this.snackBar.open('Hospital eliminado exitosamente', 'Cerrar', {
          duration: 3000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      error: (error) => {
        console.error('Error al eliminar el hospital', error);
        this.snackBar.open('Error al eliminar el hospital', 'Cerrar', {
          duration: 3000,
        });
      },
    });
  }
}
