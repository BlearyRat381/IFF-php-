<?php

include "conexao.php";

echo "<pre>";


$parts = parse_url($_SERVER['REQUEST_URI']);
parse_str($parts['query'], $query);
$id_agenda = $query['id_agenda'];
$dia = $query['dia'];
$id_usuario = $query['id_usuario'];
$servico = $query['id_servico'];
$sql_agendamento = "
    INSERT INTO agendamentos 
    (id_usuario, id_agenda, dia, id_servico)
    VALUES
    ($id_usuario, $id_agenda, '$dia', $servico)
";


if($conn->query($sql_agendamento))
echo "dados incluídos";
else
echo "Erro ao incluir";
?>
