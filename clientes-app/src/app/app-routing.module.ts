import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesRoutingModule } from './clientes/clientes-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeComponent } from './home/home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PrestacaoServicosRoutingModule } from './prestacao-servicos/prestacao-servicos-routing.module';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', component: HomeComponent }
  //{
  //  path: '', component: HomeComponent, children: [
  //    { path: 'home', component: HomeComponent }
  //  ]
 // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeRoutingModule, ClientesRoutingModule, PrestacaoServicosRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
