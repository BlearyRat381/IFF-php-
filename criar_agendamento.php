<?php
include "connection.php";

$dias_da_semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

if (isset($_POST['data'])) {
    $data_agendamento = $_POST['data'];  // Data do agendamento enviada pelo formulário
} else {
    echo "Erro: Data do agendamento não informada.";
    exit;
}

$servico = $_POST['servico'];

$dayofweek = date('w', strtotime($data_agendamento));  // Obtém o índice do dia da semana (0 a 6)

// Certifique-se de que 'agenda.dia' armazena um valor que corresponde a um índice de 0 a 6, 
// ou se está armazenando o nome completo do dia. Ajuste o SQL conforme o seu banco de dados.
$sql = "
SELECT 
    usuario.nome, agenda.dia, agenda.horario AS horario_inicio, agenda.id_agenda, usuario.id_usuario 
FROM agenda
INNER JOIN usuario ON usuario.id_usuario = agenda.id_usuario
WHERE agenda.dia = '$dias_da_semana[$dayofweek]'  -- Correção aqui
AND agenda.id_agenda NOT IN (
    SELECT agenda.id_agenda 
    FROM agendamentos 
    INNER JOIN agenda ON agendamentos.id_agenda = agenda.id_agenda
    WHERE agendamentos.data = '$data_agendamento'
)
ORDER BY agenda.horario;
";

$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Lista de Agendamentos</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>

<div class="container">
    <h1 class="text-center">Lista de Agendamentos</h1>

    <table class="table table-hover">
        <thead>
            <tr>
                <th>Barbeiro</th>
                <th>Dia da Semana</th>
                <th>Horarios</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "
                    <tr>
                            <td>".$row['nome']."</td>
                            <td>".$dias_da_semana[$row['dia']]."</td>  <!-- Corrigido aqui para mostrar o dia correto -->
                            <td>".$row['horario_inicio']."</td>
                            <td>
                                <input type='hidden' name='id_usuario' value='".$row['id_usuario']."'>
                                <input type='hidden' name='id_agenda' value='".$row['id_agenda']."'>
                                <input type='hidden' name='data' value='$data_agendamento'>
                                <a href='insert_agendamento.php?id_agenda=".$row['id_agenda']."&data=".$data_agendamento."&id_usuario=".$row['id_usuario']."&id_servico=".$servico."'  >
                                    <button type='submit' class='btn btn-primary'>Agendar</button>
                                </a>
                            </td>
                    </tr>
                    ";
                }
            } else {
                echo "<tr><td colspan='4'>Não há agendamentos disponíveis para essa data.</td></tr>";
            }
            ?>
        </tbody>
    </table>
</div>

</body>
</html>
