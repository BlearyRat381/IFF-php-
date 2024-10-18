<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro do Barbeiro</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>

<body>
    <div class="container mt-3">
        <h2>Cadastro do Barbeiro</h2>
        <form action="/cadastra_usuario.php" method="POST">
            <div class="mb-3 mt-3">
                <label >Nome de usuário:</label>
                <input type="text" class="form-control" id="NomeDeUsuario" name="NomeDeUsuario">
            </div>
            <div class="mb-3 mt-3">
                <label for="">Email:</label>
                <input type="email" class="form-control" id="email" name="email">
            </div>
            <div class="mb-3">
                <label for="">Data de Nascimento:</label>
                <input type="date" class="form-control" id="DataDeNascimento" name="DataDeNascimento">
            </div>
            <div class="mb-3">
                <label for="">Nome do Banco:</label>
                <input type="text" class="form-control" id="NomeDoBanco" name="NomeDoBanco">
            </div>
            <div class="mb-3">
                <label for="">Nome da Agência:</label>
                <input type="text" class="form-control" id="NomeDaAgencia" name="NomeDaAgencia">
            </div>
            <div class="mb-3">
                <label for="">Número da Conta:</label>
                <input type="number" class="form-control" id="NumeroDaConta" name="NumeroDaConta">
            </div>
            <div class="mb-3">
                <label for="">Chave Pix:</label>
                <input type="text" class="form-control" id="ChavePix" name="ChavePix">
            </div>
            <div class="form-check mb-3">
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</body>

</html>