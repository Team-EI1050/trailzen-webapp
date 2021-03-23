import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './senderista/perfil/perfil.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component'
import { RutasComponent } from './rutas/rutas.component'

const routes: Routes = [
  {path: '', component: PantallaInicioComponent},
  {path: 'api/senderista/get-senderista/:id', component: PerfilComponent},
  {path: 'api/ruta', component: RutasComponent},
  {path: '',redirectTo: '/', pathMatch: 'full'},
  {path: '',redirectTo: '/api/ruta', pathMatch: 'full'},
  {path: '',redirectTo: '/api/get-senderista/:id', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
