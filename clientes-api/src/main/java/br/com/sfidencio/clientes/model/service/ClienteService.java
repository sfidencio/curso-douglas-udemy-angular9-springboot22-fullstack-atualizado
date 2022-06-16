package br.com.sfidencio.clientes.model.service;

import br.com.sfidencio.clientes.model.entity.Cliente;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Transactional
public interface ClienteService {
    Cliente salvar(Cliente cliente);

    Optional<List<Cliente>> obterTodos();

    Optional<Cliente> obterPorId(UUID id);
    void excluirPorId(UUID id);
}
