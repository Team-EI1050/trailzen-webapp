//vanilla
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//terceros
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//propios
import { SenderistaComponent } from './senderista/senderista.component';
import { ModalmodificarSenderistaComponent } from './modalmodificar-senderista/modalmodificar-senderista.component'


@NgModule({
  declarations: [ //componentes
    AppComponent,
    SenderistaComponent,
    ModalmodificarSenderistaComponent
  ],
  imports: [ //modulos
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [], //servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
