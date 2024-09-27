<?php
class DadosBancario {
    
    private $id_dadosbancario;
    private $id_usuario;
    private $nome_banco;
    private $agencia;
    private $pix;

    public function SalvarDadosBancario($dados){
        $dadosbancario = new Agendamento();
        $dadosbancario->id_usuario = $dados['id_usuraio'];
        $dadosbancario->nome_banco = $dados['nome_banco'];
        $dadosbancario->agencia = $dados['agencia'];
        $dadosbancario->pix = $dados['pix'];
    }
    public function ListarDadosBancario(){
    }
    public function UpdateDadosBancario($dadosbancarios){
    }
}
?>