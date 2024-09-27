<?php
class TipoServico {
    
    private $id_tipo;
    private $tipo;

    public function SalvarTipoServico($dados){
        $tiposervico = new TipoServico();
        $tiposervico->tipo = $dados['tipo'];
    }
    public function ListarTipoServico(){
    }
    public function UpdateTipoServico($tiposervico){
    }
}
?>