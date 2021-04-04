import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Iuser } from '../modelos/Iuser';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  REST_API: string = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private httpClient: HttpClient) { }
  
    // Get user
    getUser(id:String, user_type: String): Observable<Iuser> {
  
      let API_URL = `${this.REST_API}${user_type}/${id}`;
      return this.httpClient.get<Iuser>(API_URL)
        .pipe(catchError(this.handleError));
  
    }

    // Handle error
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