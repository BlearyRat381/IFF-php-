<?php
include "connection.php";

$nome = $_POST['nome'];
$valor = $_POST['valor'];

$sql_servicos = "INSERT INTO servicos (nome, valor)
VALUES ('$nome', '$valor')";

if ($conn->query($sql_servicos) === TRUE) {
    echo "Novo Serviço incluído com sucesso";
} else {
    echo "Error: ". $sql_servicos. "<br>". mysqli_error($conn);
}

$conn->close();

?>