import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './senderista/perfil/perfil.component';

const routes: Routes = [
  {path: 'api/get-senderista/:id', component: PerfilComponent},
  {path: '',redirectTo: '/api/get-senderista/:id', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
