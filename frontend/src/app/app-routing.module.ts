import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilSenderistaComponent } from './senderista/perfilSenderista/perfilSenderista.component';
import { PerfilGestorComponent } from './gestor/perfil-gestor/perfil-gestor.component';
import { RutasComponent } from './rutas/listadoRutas/rutas.component';
import { UserLoginComponent } from './common/login/user-login/user-login.component';
import { RegistroComponent } from './common/registro/registro.component';
import { DetallesRutaComponent } from './rutas/detalles-ruta/detalles-ruta.component';
import { ProponerRutaComponent } from './rutas/proponer-ruta/proponer-ruta.component';





const routes: Routes = [
  {path: '', component: RutasComponent},
  {path: 'senderista/:id', component: PerfilSenderistaComponent},
  {path: 'gestor/:id', component: PerfilGestorComponent},
  {path: 'ruta', component: RutasComponent},
  {path: 'ruta/:id', component: DetallesRutaComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'proponerRuta', component: ProponerRutaComponent},
  {path: 'registro', component: RegistroComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
