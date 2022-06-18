import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesService } from './clientes.service';
import { ClientesModule } from './clientes/clientes.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { PrestacaoServicosModule } from './prestacao-servicos/prestacao-servicos.module';
import { PrestacaoServicosService } from './prestacao-servicos.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ClientesModule,
    PrestacaoServicosModule,
    HttpClientModule
  ],
  providers: [
    ClientesService,
    PrestacaoServicosService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
