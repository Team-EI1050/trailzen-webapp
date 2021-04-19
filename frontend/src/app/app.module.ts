//vanilla
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//terceros
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

//propios
import { ModalmodificarSenderistaComponent } from './senderista/modalmodificar-senderista/modalmodificar-senderista.component';
import { ModalmodificarGestorComponent } from './gestor/modalmodificar-gestor/modalmodificar-gestor.component';
import { ModalEliminarSenderistaComponent } from './senderista/modal-eliminar-senderista/modal-eliminar-senderista.component';
import { AppComponent } from './app.component';
import { PerfilSenderistaComponent } from './senderista/perfilSenderista/perfilSenderista.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { RutasComponent } from './rutas/listadoRutas/rutas.component';
import { PerfilGestorComponent } from './gestor/perfil-gestor/perfil-gestor.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { CerrarSesionComponent } from './common/cerrar-sesion/cerrar-sesion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetallesRutaComponent } from './rutas/detalles-ruta/detalles-ruta.component';

@NgModule({
  declarations: [	
    AppComponent,
    PerfilSenderistaComponent,
    PantallaInicioComponent,
    RutasComponent,
    ModalmodificarSenderistaComponent,
    ModalmodificarGestorComponent,
    PerfilGestorComponent,
    NavbarComponent,
    UserLoginComponent,
    RegistroComponent,
    CerrarSesionComponent,
    ModalEliminarSenderistaComponent,
    DetallesRutaComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [], //servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
