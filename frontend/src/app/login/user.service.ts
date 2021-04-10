import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Iuser } from '../modelos/Iuser';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  REST_API: string = 'http://localhost:8000';
  SENDERISA: string = 'senderista';
  GESTOR: string = 'gestor';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  user: Iuser;

  constructor(private httpClient: HttpClient) { }

  // Se encarga de validar que los datos que se han pasado son válidos (aptos para petición)
  validarDatos(nickname: String, password: String): Boolean {
    return nickname != "" && password != "";
  }

  obtenerUsuario(nickname: String, pasword: string) {
    let API_URL = `${this.REST_API}/${this.SENDERISA.toLowerCase()}/${nickname}`;
    return this.httpClient.get<Iuser>(API_URL);
  }


  // this.getUser().subscribe(res => {});
  // Get user
  getUser(id: String, user_type: String): Observable<Iuser> {

    let API_URL = `${this.REST_API}/${user_type.toLowerCase()}/${id}`;
    return this.httpClient.get<Iuser>(API_URL)
      .pipe(catchError(this.handleError));

  }

  obtenerDato(): Iuser {
    return null;
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