<?php
include "connection.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<?php

$sql = "SELECT id_grupo, nome FROM grupos";
$result = $conn->query($sql);
?>

<body>

    <div class="container mt-3">
        <h2>Cadastrar Usuário</h2>
        <form action="cadastrar_usuario.php" method="post">

            <div class="mb-3 mt-3">
                <label for="id_grupo">Grupo do Usuário:</label>
                <select class="form-select" name="id_grupo" id="id_grupo" required>
                    <option value="" disabled selected>Selecione o grupo do usuário</option>
                    <?php
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            echo "<option value=" . $row['id_grupo'] . ">" . $row['nome'] . "</option>";
                        }
                    } else {
                        echo "<option value=''>Nenhum grupo disponível</option>";
                    }
                    ?>
                </select>
            </div>

            <div class="mb-3 mt-3">
                <label for="nome">Nome:</label>
                <input type="text" class="form-control" id="nome" placeholder="Digite o nome do usuário" name="nome" required>
            </div>

            <div class="mb-3 mt-3">
                <label for="email">E-mail:</label>
                <input type="email" class="form-control" id="email" placeholder="Digite o e-mail do usuário" name="email" required>
            </div>

            <div class="mb-3 mt-3">
                <label for="senha">Senha:</label>
                <input type="password" class="form-control" id="senha" placeholder="Digite a senha do usuário" name="senha" required>
            </div>

            <div class="mb-3 mt-3">
                <label for="data_de_nascimento">Data de Nascimento:</label>
                <input type="date" class="form-control" id="data_de_nascimento" name="data_de_nascimento">
            </div>

           <div class="mb-3 mt-3" >
        <label for="nome_do_banco">Nome do Banco:</label>
        <select id="nome_do_banco" name="nome_do_banco" class="form-control">
        <option>Selecione um Banco</option>
        </select>
      </div>
            <div class="mb-3 mt-3">
                <label for="numero_da_agencia">Número da Agência:</label>
                <input type="text" class="form-control" id="numero_da_agencia" placeholder="Digite o número da agência do barbeiro" name="numero_da_agencia">
            </div>

            <div class="mb-3 mt-3">
                <label for="numero_da_conta">Número do Conta:</label>
                <input type="text" class="form-control" id="numero_da_conta" placeholder="Digite o número da conta do barbeiro" name="numero_da_conta">
            </div>

            <div class="mb-3 mt-3">
                <label for="chave_pix">Chave Pix:</label>
                <input type="text" class="form-control" id="chave_pix" placeholder="Digite a chave PIX do barbeiro" name="chave_pix">
            </div>

            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="bancos.js"></script>
</body>

</html>

<?php
$conn->close();
?>
