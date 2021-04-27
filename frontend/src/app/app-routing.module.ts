import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilSenderistaComponent } from './senderista/perfilSenderista/perfilSenderista.component';
import { PerfilGestorComponent } from './gestor/perfil-gestor/perfil-gestor.component';
// import { PantallaInicioComponent } from './common/pantalla-inicio/pantalla-inicio.component';
import { RutasComponent } from './rutas/listadoRutas/rutas.component';
import { UserLoginComponent } from './common/login/user-login/user-login.component';
import { RegistroComponent } from './common/registro/registro.component';
import { CerrarSesionComponent } from './common/cerrar-sesion/cerrar-sesion.component';
import { DetallesRutaComponent } from './rutas/detalles-ruta/detalles-ruta.component';
import { ProponerRutaComponent } from './rutas/proponer-ruta/proponer-ruta.component';





const routes: Routes = [
  {path: '', component: RutasComponent},
  {path: 'senderista/:id', component: PerfilSenderistaComponent},
  {path: 'gestor/:id', component: PerfilGestorComponent},
  {path: 'ruta', component: RutasComponent},
  {path: 'ruta/:id', component: DetallesRutaComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'cerrarSesion', component: CerrarSesionComponent},
  {path: 'proponerRuta', component: ProponerRutaComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
