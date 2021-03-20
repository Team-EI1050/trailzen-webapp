import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderistaComponent } from './senderista/senderista.component';
import { ModificarSenderistaComponent } from './modificar-senderista/modificar-senderista.component';

@NgModule({
  declarations: [
    AppComponent,
    SenderistaComponent,
    ModificarSenderistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
