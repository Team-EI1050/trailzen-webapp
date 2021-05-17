import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Ruta } from '../modelos/ruta'

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  REST_API_RUTA: string = 'http://localhost:8000/ruta';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  contadorKm: Number[] = new Array(1);

  constructor(private httpClient: HttpClient) { }

  // Get rutas

  getRutas(): Observable<Ruta[]>{

    return this.httpClient.get<Ruta[]>(`${this.REST_API_RUTA}`);

  }

  // Get ruta concreta

  getRuta(id:string): Observable<Ruta> {

    let API_URL = `${this.REST_API_RUTA}/${id}`;
    return this.httpClient.get<Ruta>(API_URL)
      .pipe(
        catchError(this.handleError)
      );

  }
  
  // Update ruta

  updateRuta(data:Ruta): Observable<any> {
    
    let API_URL = `${this.REST_API_RUTA}/${data._id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )

  }

  // Añadir ruta

  addRuta(ruta: Ruta): Observable<Ruta> {
    
    let API_URL = `${this.REST_API_RUTA}`;
    return this.httpClient.post<Ruta>(API_URL, ruta)
      .pipe(
        catchError(this.handleError)
      )

  }

  // Eliminar ruta

  deleteRuta(id:string): Observable<Ruta> {
    
    let API_URL = `${this.REST_API_RUTA}/${id}`;
    return this.httpClient.delete<Ruta>(API_URL)
      .pipe(
        catchError(this.handleError)
      )

  }

  // Error

  handleError(error: HttpErrorResponse) {

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);

  }

}
