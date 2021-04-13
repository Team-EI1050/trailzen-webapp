import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Iuser } from '../modelos/Iuser';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  REST_API:  string = 'http://localhost:8000';
  SENDERISA: string = 'senderista';
  GESTOR:    string = 'gestor';

  httpHeaders: HttpHeaders;
  user:        Iuser;

  constructor(private httpClient: HttpClient) {
        this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
     }

  // Se encarga de validar que los datos introducidos en el login.
  // TODO: Actualizar para que valide que no se introduzcan datos inválidos.
  validarDatos(nickname: String, password: String): Boolean {
    return nickname != "" && password != "";
  }

  // Hace una petición al server para obtener el senderista o el gestor y lo devuelve.
  obtenerUsuario(nickname: String, pasword: string, soyGestor: Boolean) {
    let API_URL;
    // Operador ternario
    API_URL = (soyGestor) ? `${this.REST_API}/${this.GESTOR.toLowerCase()}/${nickname}` : `${this.REST_API}/${this.SENDERISA.toLowerCase()}/${nickname}`;
    return this.httpClient.get<Iuser>(API_URL);
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