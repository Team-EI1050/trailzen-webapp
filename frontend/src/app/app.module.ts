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
import { AppComponent } from './app.component';
import { PerfilSenderistaComponent } from './senderista/perfilSenderista/perfilSenderista.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { RutasComponent } from './rutas/listadoRutas/rutas.component';
import { PerfilGestorComponent } from './gestor/perfil-gestor/perfil-gestor.component';

@NgModule({
  declarations: [	
    AppComponent,
    PerfilSenderistaComponent,
    PantallaInicioComponent,
    RutasComponent,
    ModalmodificarSenderistaComponent,
    ModalmodificarGestorComponent,
    PerfilGestorComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [], //servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
