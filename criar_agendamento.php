<?php
// Conexão com o banco de dados
include "connection.php";

// Verifica se a chave 'data' foi enviada via POST
if (isset($_POST['data']) && !empty($_POST['data'])) {
    $data_agendamento = $_POST['data'];
    $dayofweek = date('w', strtotime($data_agendamento));
} else {
    echo "Data não informada!";
    exit;  // Sai do script caso a data não seja informada
}

// Lista de dias da semana
$dias_da_semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

// Verifica se a tabela 'agenda' existe
$sql_check_table = "SHOW TABLES LIKE 'agenda'";
$table_check_result = $conn->query($sql_check_table);

// Se a tabela 'agenda' não existir
if ($table_check_result->num_rows == 0) {
    echo "A tabela 'agenda' não existe no banco de dados.";
    exit;  // Interrompe o script se a tabela não existir
}

// Verifica se a tabela 'usuarios' existe
$sql_check_usuarios = "SHOW TABLES LIKE 'usuario'";
$usuarios_check_result = $conn->query($sql_check_usuarios);

// Se a tabela 'usuarios' não existir
if ($usuarios_check_result->num_rows == 0) {
    echo "A tabela 'usuario' não existe no banco de dados.";
    exit;  // Interrompe o script se a tabela não existir
}

// Consulta para verificar os horários disponíveis
$sql = "
    SELECT nome, agenda.dia, agenda.horario 
    FROM agenda 
    INNER JOIN usuario ON usuario.id_usuario = agenda.id_usuario
    WHERE agenda.id_agenda NOT IN (
        SELECT agenda.id_agenda 
        FROM agenda 
        INNER JOIN agendamentos ON agendamentos.id_agenda = agenda.id_agenda
        INNER JOIN usuario ON usuario.id_usuario = agenda.id_usuario 
        WHERE agendamentos.data = '$data_agendamento' AND agenda.dia = $dayofweek
    )
    AND agenda.dia = $dayofweek
";

// Executa a consulta
$result = $conn->query($sql); 

// Verifique se ocorreu algum erro na consulta SQL
if (!$result) {
    echo "Erro na consulta: " . $conn->error;
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Agendamentos Disponíveis</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

    <!-- Barra de navegação -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="index.html">Início</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="lista_de_usuarios.php">Lista de usuários</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Conteúdo da página -->
    <div class="container mt-3">
        <h2>Agendamentos disponíveis para o dia: <?php echo $_POST['data']; ?></h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Barbeiro</th>
                    <th>Dia da Semana</th>
                    <th>Horário</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Verifica se existem agendamentos disponíveis
                if ($result->num_rows > 0) {
                    // Exibe os dados de cada linha
                    while ($row = $result->fetch_assoc()) {
                        echo "
                            <tr>
                                <td>".$row['nome']."</td>
                                <td>".$dias_da_semana[$row['dia']]."</td>
                                <td>".$row['horario']."</td>
                                <td><button class='btn btn-primary'>Agendar</button></td>
                            </tr>";
                    }
                } else {
                    // Caso não existam agendamentos disponíveis
                    echo "<tr><td colspan='4'>Nenhum horário disponível para o dia selecionado.</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </div>

</body>
</html>
