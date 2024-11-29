<?php
include "connection.php";

$dias_da_semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
$data_agendamento = isset($_POST['data']) ? $_POST['data'] : null;
$servico = isset($_POST['servico']) ? $_POST['servico'] : null;

$dayofweek = date('w', strtotime($data_agendamento));
$dia_da_semana = $dias_da_semana[$dayofweek];
$sql = "
SELECT 
    usuario.nome, agenda.dia, agenda.horario AS horario_inicio, agenda.id_agenda, usuario.id_usuario 
FROM agenda
INNER JOIN usuario ON usuario.id_usuario = agenda.id_usuario
WHERE agenda.dia = '$dia_da_semana'
AND agenda.id_agenda NOT IN (
    SELECT agenda.id_agenda 
    FROM agendamentos 
    INNER JOIN agenda ON agendamentos.id_agenda = agenda.id_agenda
    WHERE agendamentos.data = '$data_agendamento'
)
ORDER BY agenda.horario;
";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
while ($row = $result->fetch_assoc()) {
echo "
<tr>
    <td>".$row['nome']."</td>
     <td>".$row['dia']."</td>
     <td>".$row['horario_inicio']."</td>
     <td>
        <a href='insert_agendamento.php?id_agenda=".$row['id_agenda']."&data=".$data_agendamento."&id_usuario=".$row['id_usuario']."&id_servico=".$servico."' class='btn btn-primary'>Agendar</a>
     </td>
 </tr>
 ";
    }
} else {
echo "<tr><td colspan='4'>Não há agendamentos disponíveis para essa data.</td></tr>";
}
?>
