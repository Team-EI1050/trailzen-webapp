//vanilla
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//terceros
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//propios
import { ModalmodificarSenderistaComponent } from './senderista/modalmodificar-senderista/modalmodificar-senderista.component';
import { AppComponent } from './app.component';
import { PerfilComponent } from './senderista/perfil/perfil.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { RutasComponent } from './rutas/rutas.component';


@NgModule({
  declarations: [	
    AppComponent,
    PerfilComponent,
    PantallaInicioComponent,
    RutasComponent,
    ModalmodificarSenderistaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [], //servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
