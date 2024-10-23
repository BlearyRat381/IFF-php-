<?php
require_once 'connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome_cliente = $_POST["nome_cliente"];
  $data = $_POST["data"];
  $hora = $_POST["hora"];
  $servicos = $_POST["servicos"];
  $status = "Agendado";

  $sql = "INSERT INTO agendamentos (nome_cliente, data, hora, servicos, status) VALUES ('$nome_cliente', '$data', '$hora', '$servicos', '$status')";

  if ($conn->query($sql) === TRUE) {
    echo "Agendamento adicionado com sucesso!";
  } else {
    echo "Erro ao adicionar agendamento: " . $conn->error;
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
  <input type="submit" value="Adicionar Agendamento">
</form>