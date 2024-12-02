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
        <form action="criar_agendamento.php" method="post">

            <div class="mb-3">
                <label for="data">Data do Agendamento:</label>
                <input type="date" class="form-control" name="data" required>
            </div>

            <div class="mb-3">
                <label for="id_usuario">Cliente:</label>
                <select class="form-select" name="id_usuario" required>
                    <option>Selecione um Cliente</option>
                    <?php
                    // Consulta de clientes
                    $sql = 'SELECT * FROM usuario WHERE id_grupo = 2'; // 2 é o id_grupo para Cliente
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "<option value='".$row['id_usuario']."'>".$row['nome']."</option>";
                        }
                    }
                    ?>
                </select>
            </div>

            <div class="mb-3">
                <label for="servico">Escolha o Serviço:</label>
                <select class="form-select" name="servico" id="servico" required>
                    <?php
                    // Consulta de serviços
                    $sql = 'SELECT * FROM servicos';
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "<option value='" . $row['id_servico'] . "'>" . $row['nome'] . "</option>";
                        }
                    }
                    ?>
                </select>
            </div>

            <div class="botoes">
                <a href="index.php" class="btn btn-success">Novo Cliente</a>
                <a href="index.php" class="btn btn-primary">Voltar</a>
                <button type="submit" class="btn btn-primary">Confirmar</button>
            </div>

        </form>
    </div>

</body>

</html>
