import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './senderista/perfil/perfil.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component'
import { RutasComponent } from './rutas/listadoRutas/rutas.component'
import { UserLoginComponent } from '../app/login/user-login/user-login.component'


const routes: Routes = [
  {path: '', component: PantallaInicioComponent},
  {path: 'senderista/:id', component: PerfilComponent},
  {path: 'ruta', component: RutasComponent},
  {path: 'login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
