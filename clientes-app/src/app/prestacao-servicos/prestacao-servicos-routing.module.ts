import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestaoServicosFormComponent } from './prestao-servicos-form/prestao-servicos-form.component';
import { PrestaoServicosListaComponent } from './prestao-servicos-lista/prestao-servicos-lista.component';

const routes: Routes = [
  { path: 'nova-prestacao-servicos', component: PrestaoServicosFormComponent },
  { path: 'lista-prestacao-servicos', component: PrestaoServicosListaComponent },
  { path: 'edit-prestacao-servicos/:id', component: PrestaoServicosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestacaoServicosRoutingModule { }
