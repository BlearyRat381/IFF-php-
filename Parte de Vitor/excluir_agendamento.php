<?php
require_once 'connection.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"]; 


    if (!empty($id)) {

        $sql = "DELETE FROM agendamentos WHERE id = '$id';";


        if ($conn->query($sql) === TRUE) {
            echo "Agendamento excluído com sucesso!";
        } else {
            echo "Erro ao excluir agendamento: " . $conn->error;
        }
    } else {
        echo "ID do agendamento não foi fornecido.";
    }

    $conn->close(); 
}
?>


<form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post">

  <label>ID do Agendamento:</label>
  <input type="number" name="id" required><br><br>
  
  <input type="submit" value="Excluir Agendamento">
</form>

