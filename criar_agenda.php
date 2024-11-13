<?php
include "connection.php";


$inicio = strtotime($_POST['horario_inicio']);
$final = strtotime($_POST['horario_saida_intervelo']);
$dia = $_POST['dia'];
$id_usuario = $_POST['id_usuario'];
$mins = ($inicio - $final) / 60;
if($mins < 0)
    $mins = $mins*(-1);
//echo $mins;

$qnt_de_agendamento = $mins/30;

//echo "<br> qnt: $qnt_de_agendamento";
$acumulado = $inicio;

echo "<h1>Geração de agendamentos do primeiro horário!</h1>";
for($i = 0; $i < $qnt_de_agendamento; $i++){

    echo "\n Criado agendamento no horario para: " . date('H:i', $acumulado);
    $horario = date('H:i', $acumulado);
    incluirAgenda($dia, $id_usuario, $horario, $conn);
    $acumulado = $acumulado + 1800;
}

function incluirAgenda($dia, $id_usuario, $horario, $conn){

    $sql_agenda = "INSERT INTO agenda (dia , id_usuario, horario)
    VALUES ($dia, $id_usuario, '$horario')";

    if ($conn->query($sql_agenda) === TRUE) {
    echo "New record created successfully";
    } else {
    echo "Error: " . $sql_agenda . "<br>" . $conn->error;
    }
}


$inicio = strtotime($_POST['horario_volta_intervela']);
$final = strtotime($_POST['horario_fim']);
$mins = ($inicio - $final) / 60;

if($mins < 0)
    $mins = $mins*(-1);
//echo $mins;

$qnt_de_agendamento = $mins/30;

//echo "<br> qnt: $qnt_de_agendamento";
$acumulado = $inicio;

echo "<h1>Geração de agendamentos do segundo horário!</h1>";
for ($i = 0; $i < $qnt_de_agendamento; $i++) {
    echo "Criando agendamento no horário: " . date('H:i', $acumulado) . "<br>";
    $horario = date('H:i', $acumulado);
    incluirAgenda($dia, $id_usuario, $horario, $conn);
    $acumulado = $acumulado + 1800; // 1800 segundos = 30 minutos
}

?>