-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23/10/2024 às 15:35
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `barbearia`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `agenda`
--

CREATE TABLE `agenda` (
  `id_agenda` int(11) NOT NULL,
  `dia_semana` int(11) NOT NULL,
  `hora_inicio` int(11) NOT NULL,
  `hora_fim` int(11) NOT NULL,
  `hora_intervalo_inicio` int(11) NOT NULL,
  `hora_intervalo_fim` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `agendamentos`
--

CREATE TABLE `agendamentos` (
  `id_agendamento` int(11) NOT NULL,
  `id_servico` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_agenda` int(11) NOT NULL,
  `id_barbeiro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `dados_bancarios`
--

CREATE TABLE `dados_bancarios` (
  `id_dados_bancarios` int(11) NOT NULL,
  `chave_pix` varchar(128) NOT NULL,
  `numero_da_conta` varchar(15) NOT NULL,
  `numero_da_agencia` varchar(15) NOT NULL,
  `nome_do_banco` varchar(60) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `dados_bancarios`
--

INSERT INTO `dados_bancarios` (`id_dados_bancarios`, `chave_pix`, `numero_da_conta`, `numero_da_agencia`, `nome_do_banco`, `id_usuario`) VALUES
(1, '2198554563325', '21312312', '007', 'Nubank', 0),
(2, '2198554563325', '46546433', '000', 'Nubank', 0),
(3, '21967377400', '264688', '009', '341', 0),
(4, '21967377400', '264688', '009', '341', 0),
(7, '21967377400', '21312312', '1', '1', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `grupos`
--

CREATE TABLE `grupos` (
  `id_grupo` int(11) NOT NULL,
  `nome` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `grupos`
--

INSERT INTO `grupos` (`id_grupo`, `nome`) VALUES
(1, 'Barbeiro'),
(2, 'Cliente');

-- --------------------------------------------------------

--
-- Estrutura para tabela `serviços`
--

CREATE TABLE `serviços` (
  `id_servico` int(11) NOT NULL,
  `nome` varchar(128) NOT NULL,
  `valor` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `telefones`
--

CREATE TABLE `telefones` (
  `id_telefone` int(11) NOT NULL,
  `numero` varchar(12) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tipo_servico`
--

CREATE TABLE `tipo_servico` (
  `id_tipo` int(11) NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(128) NOT NULL,
  `data_de_nascimento` date NOT NULL,
  `data_criacao` datetime NOT NULL DEFAULT current_timestamp(),
  `email` varchar(64) NOT NULL,
  `senha` varchar(64) NOT NULL,
  `id_grupo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nome`, `data_de_nascimento`, `data_criacao`, `email`, `senha`, `id_grupo`) VALUES
(1, 'Marta Souza', '2000-01-01', '2024-10-20 21:12:58', 'marta@gmail.com', '12345', 1),
(2, 'Carlos Daniel', '2024-10-04', '2024-10-23 01:44:00', 'carlos@gmail.com', '12345', 1),
(3, 'Vitor Rangel', '2009-06-22', '2024-10-23 02:32:33', 'vitinho@gmail.com', '12345', 1),
(4, 'Vitor Rangel', '2009-06-22', '2024-10-23 02:33:53', 'vitinho@gmail.com', '12345', 1),
(7, 'Pablo', '2024-11-03', '2024-10-23 09:52:55', 'pablo@gmail.com', '456789', 2);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id_agenda`);

--
-- Índices de tabela `agendamentos`
--
ALTER TABLE `agendamentos`
  ADD PRIMARY KEY (`id_agendamento`);

--
-- Índices de tabela `dados_bancarios`
--
ALTER TABLE `dados_bancarios`
  ADD PRIMARY KEY (`id_dados_bancarios`);

--
-- Índices de tabela `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`id_grupo`);

--
-- Índices de tabela `serviços`
--
ALTER TABLE `serviços`
  ADD PRIMARY KEY (`id_servico`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id_agenda` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `agendamentos`
--
ALTER TABLE `agendamentos`
  MODIFY `id_agendamento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `dados_bancarios`
--
ALTER TABLE `dados_bancarios`
  MODIFY `id_dados_bancarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `serviços`
--
ALTER TABLE `serviços`
  MODIFY `id_servico` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
