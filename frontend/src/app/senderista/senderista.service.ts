import { Injectable } from '@angular/core';
import { Senderista } from '../modelos/senderista';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class SenderistaService {

  REST_API_SENDERISTA: string = 'http://localhost:8000/senderista';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Get sendersita

  getSenderistas(): Observable<Senderista[]>{

    return this.httpClient.get<Senderista[]>(`${this.REST_API_SENDERISTA}`);

  }

  getSenderista(id:string): Observable<Senderista> {

    let API_URL = `${this.REST_API_SENDERISTA}/${id}`;
    return this.httpClient.get<Senderista>(API_URL)
      .pipe(
        catchError(this.handleError)
      );

  }
  
  // Update senderista

  updateSenderista(data:Senderista): Observable<any> {

    let API_URL = `${this.REST_API_SENDERISTA}/${data._id}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )

  }

  // Add senderista

  addSenderista(senderista: Senderista): Observable<Senderista> {

    let API_URL = `${this.REST_API_SENDERISTA}`;
    return this.httpClient.post<Senderista>(API_URL, senderista)
      .pipe(
        catchError(this.handleError)
      )

  }

  // Delete senderista

  deleteSenderista(id:string): Observable<Senderista> {
    
    let API_URL = `${this.REST_API_SENDERISTA}/${id}`;
    return this.httpClient.delete<Senderista>(API_URL)
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
