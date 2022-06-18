import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ClientesFormComponent } from '../clientes/clientes-form/clientes-form.component';
import { ClientesListaComponent } from '../clientes/clientes-lista/clientes-lista.component';

const routes: Routes = [
  { path: 'novo-cliente', component: ClientesFormComponent, canActivate: [AuthGuard] },
  { path: 'lista-cliente', component: ClientesListaComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
