<?php

class Grupo {
    
    private $id_grupo;
    private $nome;

    public function SalvarGrupo($dados){
        $grupo = new Grupo();
        $grupo->nome = $dados['nome'];
    }
    public function ListarGrupo(){
    }
    public function UpdateGrupo($grupo){
    }
}

?>