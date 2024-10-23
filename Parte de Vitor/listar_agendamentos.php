<?php
require_once 'connection.php';

$sql = "SELECT * FROM agendamentos ORDER BY data, hora";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  echo "<table border='1'>";
  echo "<tr><th>ID</th><th>Nome do Cliente</th><th>Data</th><th>Hora</th><th>Serviços</th><th>Status</th></tr>";

  while($row = $result->fetch_assoc()) {
    echo "<tr>";
    echo "<td>" . $row["id"]. "</td>";
    echo "<td>" . $row["nome_cliente"]. "</td>";
    echo "<td>" . $row["data"]. "</td>";
    echo "<td>" . $row["hora"]. "</td>";
    echo "<td>" . $row["servicos"]. "</td>";
    echo "<td>" . $row["status"]. "</td>";
    echo "</tr>";
  }

  echo "</table>";
} else {
  echo "Nenhum agendamento encontrado.";
}

$conn->close();
?>