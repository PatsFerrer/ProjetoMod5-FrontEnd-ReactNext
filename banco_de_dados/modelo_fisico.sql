-- Não é necessário executar o código abaixo, o Spring gera automaticamente --

CREATE DATABASE destino_certo2;

USE destino_certo2;

CREATE TABLE `cliente` (
  `data_nascimento` date NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cpf` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_r1u8010d60num5vc8fp0q1j2a` (`cpf`),
  UNIQUE KEY `UK_cmxo70m08n43599l3h0h07cc6` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `destino` (
  `valor` float NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `reserva` (
  `cliente_id` bigint NOT NULL,
  `data_hora` datetime(6) NOT NULL,
  `destino_id` bigint NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `FK7cg2jiyn5cf6f6elccvb6963k` (`cliente_id`),
  KEY `FKek242lfyfo8luumnduslmjais` (`destino_id`),
  CONSTRAINT `FK7cg2jiyn5cf6f6elccvb6963k` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FKek242lfyfo8luumnduslmjais` FOREIGN KEY (`destino_id`) REFERENCES `destino` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `contato` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `mensagem` text NOT NULL,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci