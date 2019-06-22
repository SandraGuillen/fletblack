import { Injectable } from '@angular/core';

// Importa módulo para hacer las peticiones http,
// poder pedir datos
import { HttpClient } from '@angular/common/http';

// Importa el modelo
import { Conductor } from '../models/Conductor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConductorServices 
{
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  list(): Observable<Conductor> {
    return this.http.get(`${this.API_URI}/conductor`);
  }

  get(placa: string): Observable<Conductor> {
    return this.http.get(`${this.API_URI}/conductor/${placa}`);

  }

  create(conductor: Conductor): Observable<Conductor> {

    return this.http.post(`${this.API_URI}/conductor`, conductor);

  }

  update(placa: string | number, conductor: Conductor): Observable<Conductor> {
    return this.http.put(`${this.API_URI}/conductor/${placa}`, conductor);
  }

  delete(placa: string): Observable<Conductor> {
    return this.http.delete(`${this.API_URI}/conductor/${placa}`);
  }

}