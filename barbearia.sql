-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28/11/2024 às 17:25
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
  `dia` int(11) NOT NULL,
  `horario` time NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `agenda`
--

INSERT INTO `agenda` (`id_agenda`, `dia`, `horario`, `id_usuario`) VALUES
(1, 2, '08:30:00', 4),
(2, 2, '08:00:00', 4),
(3, 2, '09:00:00', 4),
(4, 2, '09:30:00', 4),
(5, 2, '10:00:00', 4),
(6, 2, '10:30:00', 4),
(7, 2, '11:00:00', 4),
(8, 2, '11:30:00', 4),
(9, 2, '14:00:00', 4),
(10, 2, '14:30:00', 4),
(11, 2, '15:00:00', 4),
(12, 2, '15:30:00', 4),
(13, 2, '16:00:00', 4),
(14, 2, '16:30:00', 4),
(15, 2, '17:00:00', 4),
(16, 2, '17:30:00', 4),
(17, 2, '18:00:00', 4),
(18, 2, '18:30:00', 4),
(19, 2, '19:00:00', 4),
(20, 2, '19:30:00', 4),
(21, 5, '08:00:00', 2),
(22, 5, '08:30:00', 2),
(23, 5, '09:00:00', 2),
(24, 5, '09:30:00', 2),
(25, 5, '10:00:00', 2),
(26, 5, '10:30:00', 2),
(27, 5, '11:00:00', 2),
(28, 5, '11:30:00', 2),
(29, 5, '14:00:00', 2),
(30, 5, '14:30:00', 2),
(31, 5, '15:00:00', 2),
(32, 5, '15:30:00', 2),
(33, 5, '16:00:00', 2),
(34, 5, '16:30:00', 2),
(35, 5, '17:00:00', 2),
(36, 5, '17:30:00', 2),
(37, 5, '18:00:00', 2),
(38, 5, '18:30:00', 2),
(39, 5, '19:00:00', 2),
(40, 5, '19:30:00', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `agendamentos`
--

CREATE TABLE `agendamentos` (
  `id_agendamento` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_agenda` int(11) NOT NULL,
  `data` date NOT NULL
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
(1, '2198554563325', '21312312', '007', 'Nubank', 1),
(2, '2198554563325', '46546433', '000', 'Nubank', 2),
(3, '21967377400', '264688', '009', '341', 3),
(4, '21967377400', '264688', '009', '341', 4),
(5, '21967377400', '21312312', '1', '1', 5),
(6, '2198554563325', '21312312', '212', '212', 6),
(7, '1235', '1235', '24', '24', 7),
(8, '1235', '1235', '24', '24', 8),
(9, '1235', '1235', '26', '24', 9),
(10, '1235', '1235', '83', '83', 10),
(11, '2345', '765', '655', '655', 11);

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
-- Estrutura para tabela `servicos`
--

CREATE TABLE `servicos` (
  `id_servico` int(11) NOT NULL,
  `nome` varchar(128) NOT NULL,
  `valor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `servicos`
--

INSERT INTO `servicos` (`id_servico`, `nome`, `valor`) VALUES
(1, 'Corte de barba', 25);

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
(1, 'Marta Souza', '2000-01-01', '2024-10-20 21:12:58', 'marta@gmail.com', '12345', 2),
(2, 'Carlos Daniel', '2024-10-04', '2024-10-23 01:44:00', 'carlos@gmail.com', '12345', 1),
(3, 'Victor Turing', '2009-06-22', '2024-10-23 02:32:33', 'vitinho@gmail.com', '12345', 2),
(4, 'Vitor Rangel', '2009-06-22', '2024-10-23 02:33:53', 'vitinho@gmail.com', '12345', 1),
(5, 'Pablo Bastos', '2024-11-03', '2024-10-23 09:52:55', 'pablo@gmail.com', '456789', 2),
(6, 'Bleary', '2024-10-02', '2024-10-23 11:25:28', 'blearyrat381@gmail.com', '12345', 1),
(7, 'Nathan Bezerra', '2006-09-10', '2024-10-23 11:34:20', 'nathan_gamer@gmail.com', '12345', 2);

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
-- Índices de tabela `servicos`
--
ALTER TABLE `servicos`
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
  MODIFY `id_agenda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de tabela `agendamentos`
--
ALTER TABLE `agendamentos`
  MODIFY `id_agendamento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `dados_bancarios`
--
ALTER TABLE `dados_bancarios`
  MODIFY `id_dados_bancarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `servicos`
--
ALTER TABLE `servicos`
  MODIFY `id_servico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
