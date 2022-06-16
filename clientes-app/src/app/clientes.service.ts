import cli from '@angular/cli';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  api?: string = "/api/v1/clientes";

  constructor(private http: HttpClient) { }

  getCliente(cliente: Cliente): Cliente {
    /*let cliente: Cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = "Fidencio"
    cliente.cpf = "Teste";*/
    return cliente;
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    if (cliente.id) {
      return this.http.put<Cliente>(environment.url_base + this.api + "/" + `${cliente.id}`, cliente);
    } else {
      return this.http.post<Cliente>(environment.url_base + this.api, cliente);
    }
  }

  deleteClienteById(id: string): Observable<any> {
    return this.http.delete<any>(environment.url_base + this.api + "/" + `${id}`)
  }

  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(environment.url_base + this.api);
  }

  getClienteById(id: Number): Observable<Cliente> {
    return this.http.get<any>(environment.url_base + this.api + "/" + `${id}`)
  }

  getAllClientes2(): Cliente[] {
    let clientes: Cliente[] = [];
    let c: Cliente = new Cliente();
    c.id = 1234;
    c.nome = "Teste";
    c.cpf = "12345678974";
    c.dataCadastro = new Date();
    let c1: Cliente = new Cliente();
    c1.id = 1234;
    c1.nome = "Teste 2";
    c1.cpf = "12345678974";
    c1.dataCadastro = new Date();
    clientes.push(c, c1);
    return clientes;
  }

}
