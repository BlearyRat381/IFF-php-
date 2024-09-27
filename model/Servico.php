<?php
class Servico {
    
    private $id_servico;
    private $nome;
    private $valor;
    private $id_tipo;

    public function SalvarServico($dados){
        $servico = new Agendamento();
        $servico->nome = $dados['nome'];
        $servico->valor = $dados['valor'];
        $servico->id_tipo = $dados['id_tipo'];

    }
    public function ListarServico(){
    }
    public function UpdateServico($servico){
    }
}
?>