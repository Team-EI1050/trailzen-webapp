
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
import { ModalmodificarRutaComponent } from './rutas/modalmodificar-ruta/modalmodificar-ruta.component';
import { ModalEliminarSenderistaComponent } from './senderista/modal-eliminar-senderista/modal-eliminar-senderista.component';
import { AppComponent } from './app.component';
import { PerfilSenderistaComponent } from './senderista/perfilSenderista/perfilSenderista.component';
import { PantallaInicioComponent } from './common/pantalla-inicio/pantalla-inicio.component';
import { RutasComponent } from './rutas/listadoRutas/rutas.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { UserLoginComponent } from './common/login/user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './common/registro/registro.component';
import { PerfilGestorComponent } from './gestor/perfil-gestor/perfil-gestor.component';
import { MapaRutaComponent } from './common/mapa-ruta/mapa-ruta.component';
import { DetallesRutaComponent } from'./rutas/detalles-ruta/detalles-ruta.component';
import { MapaDetalleComponent } from './common/mapa-detalle/mapa-detalle.component';
import { ModalEliminarComentarioComponent } from './rutas/modal-eliminar-comentario/modal-eliminar-comentario.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RutaComponent } from './rutas/ruta/ruta.component';
import { ProponerRutaComponent } from './rutas/proponer-ruta/proponer-ruta.component';
import { MapaProponerComponent } from './common/mapa-proponer/mapa-proponer.component';




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
    ModalEliminarSenderistaComponent,
    ModalmodificarRutaComponent,
    MapaRutaComponent,
    MapaDetalleComponent,
    DetallesRutaComponent,
    MapaDetalleComponent,
    ModalEliminarComentarioComponent,
    RutaComponent,
    ProponerRutaComponent,
    MapaProponerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [], //servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
