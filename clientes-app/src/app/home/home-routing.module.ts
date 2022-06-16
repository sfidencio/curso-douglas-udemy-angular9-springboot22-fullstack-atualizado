import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from '../clientes/clientes-form/clientes-form.component';
import { ClientesListaComponent } from '../clientes/clientes-lista/clientes-lista.component';

const routes: Routes = [
  { path: 'novo-cliente', component: ClientesFormComponent },
  { path: 'lista-cliente', component: ClientesListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
