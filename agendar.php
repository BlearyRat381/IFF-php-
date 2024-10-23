<?php
include "connection.php";
?>

<!DOCTYPE html>
<html lang="pt-Br">
<head>
  <title>Tela de Agendamento</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

<div class="container mt-3">
  <h2>Criar agendamento</h2>
  <form action="/action_page.php">
    <div class="mb-3 mt-3">
        <label class="form-check-label">Cliente</label>
        <select class="form-select">
            <option>Selecione um cliente</option>
            
            <?php
                $sql = 'select * from usuario where id_grupo = 2'; // 1 é o barbeiro hem! 2  é o Cliente
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                echo "<option>".$row['nome']."</option>";
               }}
            ?>
        
        </select> 
        <a  href="index.php" class="btn btn-success"> + </a>
    </div>

    <div class="mb-3 mt-3">
        <label class="form-check-label">
            Serviço
        </label>
        <select class="form-select">
            <option>Selecione um serviço</option>
          </select>
    </div>

    <div class="mb-3 mt-3">
        <label class="form-check-label">Barbeiro</label>
        <select class="form-select">
            <option>Selecione um barbeiro</option>
            <?php
                $sql = 'select * from usuario where id_grupo = 1'; // 1 é o barbeiro hem! 2  é o Cliente
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                echo "<option>".$row['nome']."</option>";
               }}
            ?>

          </select>
    </div>

    <div class="mb-3 mt-3">
        <label type="date" class="form-check-label">
            Dia
        </label>
        <select class="form-select">
            <option>Selecione um dia</option>
          </select>
    </div>

    <div class="mb-3 mt-3">
        <label type="time" class="form-check-label">
            Horário
        </label>
        <select class="form-select">
            <option>Selecione um horário</option>
          </select>
    </div>


    <button type="submit" class="btn btn-primary">Agendar</button>
  </form>
</div>

</body>
</html>

<?php
$conn->close();
?>