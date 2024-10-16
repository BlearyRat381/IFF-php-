-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16/10/2024 às 21:14
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
-- Estrutura para tabela `cadastro_usuario`
--

CREATE TABLE `cadastro_usuario` (
  `id` int(11) NOT NULL,
  `nome_usuario` varchar(128) NOT NULL,
  `data_de_nascimento` date NOT NULL,
  `nome_banco` varchar(64) NOT NULL,
  `numero_agencia` varchar(5) NOT NULL,
  `numero_conta` varchar(16) NOT NULL,
  `chave_pix` varchar(64) NOT NULL,
  `data_criacao` datetime NOT NULL DEFAULT current_timestamp(),
  `email` varchar(64) NOT NULL,
  `senha` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cadastro_usuario`
--

INSERT INTO `cadastro_usuario` (`id`, `nome_usuario`, `data_de_nascimento`, `nome_banco`, `numero_agencia`, `numero_conta`, `chave_pix`, `data_criacao`, `email`, `senha`) VALUES
(1, 'Vitor Silveira Rangel', '2009-06-22', 'Bradesco', '39782', '98757365', '2299983729', '2024-09-06 14:41:32', 'vitingamer123@gmail.com', '12345'),
(2, 'Pedro Silveira Rangel', '2007-06-09', 'Inter', '17252', '66664529', '2196737740', '2024-08-30 17:11:12', 'pedro_gamer123@gmail.com', '23456'),
(3, 'Pablo Bastos Frazão', '2008-09-13', 'Nubank', '17252', '25632756', '2199427903', '2024-08-30 17:28:52', 'pablo@gmail.com', '34567'),
(4, 'Juliana Protásio do Nascimento', '2008-03-23', 'Nubank', '76436', '01298745', '2199875483', '2024-09-06 14:52:19', 'japinhamulan21@gmail.com', '45678'),
(5, 'Ivo Anthony da Silva André', '2008-04-15', 'Inter', '37863', '69735129', '2199983746', '2024-09-06 15:11:27', 'ivo_reidofrifas@gmail.com', '56789'),
(6, 'Gabriel Seilhe da Silva', '2008-12-09', 'Itau', '03242', '46278946', '2199746359', '2024-09-06 14:39:47', 'gabrielseilhe@gmail.com', '67890');

-- --------------------------------------------------------

--
-- Estrutura para tabela `telefones`
--

CREATE TABLE `telefones` (
  `id_telefone` int(11) NOT NULL,
  `numero` varchar(12) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cadastro_usuario`
--
ALTER TABLE `cadastro_usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cadastro_usuario`
--
ALTER TABLE `cadastro_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
