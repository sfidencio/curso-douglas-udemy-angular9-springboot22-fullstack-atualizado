package br.com.sfidencio.clientes.model;

import br.com.sfidencio.clientes.model.entity.Cliente;
import br.com.sfidencio.clientes.model.entity.PrestacaoServico;
import br.com.sfidencio.clientes.model.service.ClienteService;
import br.com.sfidencio.clientes.model.service.PrestacaoServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ServicoFacadeImp implements ServicoFacade {

    @Autowired
    private ClienteService clienteService;
    @Autowired
    private PrestacaoServicoService prestacaoServicoService;

    @Override
    public Cliente salvarCliente(Cliente cliente) {
        return this.clienteService.salvar(cliente);
    }

    @Override
    public Optional<List<Cliente>> obterTodosClientes() {
        return this.clienteService.obterTodos();
    }

    @Override
    public Optional<Cliente> obterClientePorId(UUID id) {
        return this.clienteService.obterPorId(id);
    }

    @Override
    public void excluirClientePorId(UUID id) {
        this.clienteService.excluirPorId(id);
    }

    @Override
    public PrestacaoServico salvarPrestacaoServico(PrestacaoServico prestacaoServico) {
        return this.prestacaoServicoService.salvar(prestacaoServico);
    }

    @Override
    public Optional<List<PrestacaoServico>> obterTodasPrestacoesServicos() {
        return this.prestacaoServicoService.obterTodos();
    }

    @Override
    public Optional<List<PrestacaoServico>> obterPrestacaoServicosPorClienteEMes(String nome, Integer mes) {
        return this.prestacaoServicoService.obterPrestacaoServicosPorClienteEMes(nome, mes);
    }
}
