<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agendamento Concluído</title>
   
</head>
<body>
    <?php
    if($_GET['status'] == 1){
        echo '
        <br><br><br><br><br><br><br>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Sucesso!</strong> Seu agendamento foi realizado com sucesso.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
    <div class="mt-3">
        <a href="index.php" class="btn btn-primary">Voltar à página inicial</a>
    </div>
</div>
  ';
    } else {
        echo '
       <br><br><br><br><br><br><br>
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Atenção!</strong> Erro no agendamento.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
    <div class="mt-3">
        <a href="index.php" class="btn btn-primary">Voltar à página inicial</a>
        <a href="Cadastrar_Agendamento.php" class="btn btn-primary">Tentar novamente</a>

    </div>
</div>
  ';
    }

    ?>
</div>
</body>
</html>