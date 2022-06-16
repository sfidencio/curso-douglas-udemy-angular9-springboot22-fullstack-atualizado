package br.com.sfidencio.clientes.model;

import br.com.sfidencio.clientes.model.entity.Cliente;
import br.com.sfidencio.clientes.model.entity.PrestacaoServico;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ServicoFacade {
    Cliente salvarCliente(Cliente cliente);

    Optional<List<Cliente>> obterTodosClientes();

    Optional<Cliente> obterClientePorId(UUID id);

    void excluirClientePorId(UUID id);

    PrestacaoServico salvarPrestacaoServico(PrestacaoServico prestacaoServico);

    Optional<List<PrestacaoServico>> obterTodasPrestacoesServicos();

    Optional<List<PrestacaoServico>> obterPrestacaoServicosPorClienteEMes(String nome, Integer mes);
}
