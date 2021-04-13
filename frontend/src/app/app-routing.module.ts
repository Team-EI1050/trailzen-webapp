import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilSenderistaComponent } from './senderista/perfilSenderista/perfilSenderista.component';
import { PerfilGestorComponent } from './gestor/perfil-gestor/perfil-gestor.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component'
import { RutasComponent } from './rutas/listadoRutas/rutas.component'


const routes: Routes = [
  {path: '', component: PantallaInicioComponent},
  {path: 'senderista/:id', component: PerfilSenderistaComponent},
  {path: 'gestor/:id', component: PerfilGestorComponent},
  {path: 'ruta', component: RutasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
