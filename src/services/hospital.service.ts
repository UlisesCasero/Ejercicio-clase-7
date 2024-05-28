import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospital } from 'src/models/hospital';

@Injectable({
  providedIn: 'root',
})
export class HospitalesService {
  private apiUrl = 'http://localhost:3000/hospitales';

  constructor(private http: HttpClient) {}

  // Obtener la lista de hospitales
  get(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.apiUrl);
  }

  // Obtener hospital por id
  getHospitalId(hospitalId: number): Observable<Hospital> {
    const url = `${this.apiUrl}/${hospitalId}`;
    return this.http.get<Hospital>(url);
  }

  // Agregar un nuevo hospital
  add(hospital: Hospital): Observable<Hospital> {
    return this.http.post<Hospital>(this.apiUrl, hospital, {});
  }

  mod(hospital: Hospital): Observable<Hospital> {
    const url = `${this.apiUrl}/${hospital.id}`;
    return this.http.put<Hospital>(url, hospital);
  }

  delete(hospitalId: number): Observable<void> {
    const url = `${this.apiUrl}/${hospitalId}`;
    return this.http.delete<void>(url);
  }
}
