import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Gestor } from '../modelos/gestor';

@Injectable({
  providedIn: 'root'
})
export class GestorService {

  REST_API_GESTOR: string = 'http://localhost:8000/gestor';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Get gestor concreto

  getGestor(id:string): Observable<Gestor> {

    let API_URL = `${this.REST_API_GESTOR}/${id}`;
    return this.httpClient.get<Gestor>(API_URL)
      .pipe(
        catchError(this.handleError)
      );

  }
  
  // Actualizar gestor

  updateGestor(data:Gestor): Observable<any> {
    
    let API_URL = `${this.REST_API_GESTOR}/${data._id}`;
    return this.httpClient.put(API_URL, data)
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
