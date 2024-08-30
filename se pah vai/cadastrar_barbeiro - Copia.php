<?php
include "conexao.php";

echo "<pre>";
print_r($_POST);

$nome_usuario = $_POST['NomeDeUsuario'];
$email = $_POST['email'];
$data_de_nascimento = $_POST['DataDeNascimento'];
$nome_banco = $_POST['NomeDoBanco'];
$nome_agencia = $_POST['NomeDaAgencia'];
$numero_da_conta = $_POST['NumeroDaConta'];
$chave_pix = $_POST['ChavePix'];

$sql = "INSERT INFO
cadastro
(email,
DataDeNascimento,
NomeDeUsuario,
NomeDoBanco,
NomeDaAgencia,
NumeroDaConta,
ChavePix)
VALUES
('$email',
'$data_de_nascimento',
'$nome_usuario',
'$nome_banco',
'$nome_agencia',
'$numero_da_conta',
'$chave_pix')";

if (Mysqli_query($conn, $sql)) {
    $mensagem = "O usuário(a) $nome_usuario foi incluido no banco de dados";}
else{
    echo "error" . $sql . "<br>" . mysqli_error($conn)
;}
?>


            