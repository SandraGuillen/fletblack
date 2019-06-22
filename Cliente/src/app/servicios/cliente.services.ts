import { Injectable } from '@angular/core';

// Importa módulo para hacer las peticiones http,
// poder pedir datos
import { HttpClient } from '@angular/common/http';

// Importa el modelo
import { cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class clienteservices
{


  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  list(): Observable<cliente> {
    return this.http.get(`${this.API_URI}/cliente`);
  }2

  get(celular: string): Observable<cliente> {
    return this.http.get(`${this.API_URI}/cliente/${celular}`);

  }

  create(cliente: cliente): Observable<cliente> {

    return this.http.post(`${this.API_URI}/cliente`, cliente);

  }

  update(celular: string | number, cliente: cliente): Observable<cliente> {
    return this.http.put(`${this.API_URI}/cliente/${celular}`, cliente);
  }

  delete(celular: string): Observable<cliente> {
    return this.http.delete(`${this.API_URI}/cliente/${celular}`);
  }
}