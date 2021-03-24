import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './senderista/perfil/perfil.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RutasComponent } from './rutas/rutas.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [	
    AppComponent,
    PerfilComponent,
    PantallaInicioComponent,
    RutasComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
