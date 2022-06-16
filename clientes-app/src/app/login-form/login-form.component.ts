import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username?: string;
  password?: string;
  loginError: boolean = false;
  cadastrando: boolean = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(`Usuario: ${this.username}, Senha: ${this.password}`)
    this.efetuarLogin();
  }

  prepararCadastro(event: any) {
    //event.preventDefault;
    this.cadastrando = true;
  }

  cancelar(event: any) {
    //event.preventDefault;
    this.cadastrando = false;
  }


  efetuarLogin() {
    this.route.navigate(['/'])
  }


}
