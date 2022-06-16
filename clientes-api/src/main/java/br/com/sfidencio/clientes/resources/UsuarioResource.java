package br.com.sfidencio.clientes.resources;

import br.com.sfidencio.clientes.model.ServicoFacade;
import br.com.sfidencio.clientes.model.entity.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("api/v1/usuarios")
//@CrossOrigin(origins = "http://localhost:4200") //Requisicoes vinda do angular!
public class UsuarioResource {
    @Autowired
    private ServicoFacade facade;

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente salvar(@Valid @RequestBody Cliente cliente) {
        return this.facade.salvarCliente(cliente);
    }

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public List<Cliente> obterTodos() {
        return this.facade.obterTodosClientes().orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao buscar clientes"));
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public Cliente obterPorId(@PathVariable UUID id) {
        return this.facade.obterClientePorId(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao buscar cliente: " + id.toString()));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluirPorId(@PathVariable UUID id) {
        this.facade.obterClientePorId(id).map(
                cliente -> {
                    this.facade.excluirClientePorId(cliente.getId());
                    return Void.TYPE;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não existe: " + id.toString()));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizarCliente(@PathVariable UUID id, @RequestBody Cliente clienteAtualizado) {
        this.facade.obterClientePorId(id).map(
                cliente -> {
                    clienteAtualizado.setId(cliente.getId());
                    cliente.setNome(clienteAtualizado.getNome());
                    cliente.setCpf(clienteAtualizado.getCpf());
                    return this.facade.salvarCliente(clienteAtualizado);
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao buscar cliente: " + id.toString()));
    }
}
