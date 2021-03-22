import { Injectable } from '@angular/core';
import { Senderista } from './senderista';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class SenderistaService {

   REST_API_SENDERISTA: string = 'http://localhost:8000/api';
  // REST_API_SENDERISTA: string = 'http://localhost:8000/api/senderista';


  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Get sendersita

  getSenderista(id:any): Observable<any> {
    let API_URL = `${this.REST_API_SENDERISTA}/get-senderista/${id}`;
    // let API_URL = `${this.REST_API_SENDERISTA}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  
  // Update senderista

  updateSenderista(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API_SENDERISTA}/update-senderista/${id}`;
    // let API_URL = `${this.REST_API_SENDERISTA}/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // Add senderista

  addSenderista(data: Senderista): Observable<any> {
    let API_URL = `${this.REST_API_SENDERISTA}/add-senderista`;
    // let API_URL = `${this.REST_API_SENDERISTA}`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete senderista

  deleteSenderista(id:any): Observable<any> {
    let API_URL = `${this.REST_API_SENDERISTA}/delete-senderista/${id}`;
    // let API_URL = `${this.REST_API_SENDERISTA}/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
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
