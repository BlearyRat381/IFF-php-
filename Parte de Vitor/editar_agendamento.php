<?php
require_once 'connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
  $nome_cliente = $_POST["nome_cliente"];
  $data = $_POST["data"];
  $hora = $_POST["hora"];
  $servicos = $_POST["servicos"];
  $status = "Agendado";

  if (!empty($id)) {
    $sql = "UPDATE agendamentos 
            SET nome_cliente = '$nome_cliente', 
                data = '$data', 
                hora = '$hora', 
                servicos = '$servicos', 
                status = '$status' 
            WHERE id = '$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Agendamento editado com sucesso!";
    } else {
        echo "Erro ao editar agendamento: " . $conn->error;
    }
} else {
    echo "ID do agendamento não foi fornecido.";
}

$conn->close();
}
?>

<form action="<?php echo $_SERVER["PHP_SELF"];?>" method="post">
  <label>Nome do Cliente:</label>
  <input type="text" name="nome_cliente"><br><br>
  <label>Data:</label>
  <input type="date" name="data"><br><br>
  <label>Hora:</label>
  <input type="time" name="hora"><br><br>
  <label>Serviços:</label>
  <input type="text" name="servicos"><br><br>
  <input type="submit" value="editar Agendamento">
</form>