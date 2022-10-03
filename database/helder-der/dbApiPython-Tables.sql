# SCRIPT do banco de dados MULTIDIMENSIONAL
CREATE DATABASE `dbApiPython`;
USE `dbApiPython`;
 
 CREATE TABLE `Cpu`(
     `idCpu` INT PRIMARY KEY AUTO_INCREMENT
     ,`cpuPerc` DECIMAL(5,2) NOT NULL
     ,`cpuTemp` DECIMAL(5,2) NOT NULL
     ,`core` VARCHAR(2) NOT NULL
 );

 CREATE TABLE `Ram`(
     `idRam` INT PRIMARY KEY AUTO_INCREMENT
     ,`ramPerc` DECIMAL(5,2) NOT NULL
 );
 
 CREATE TABLE `Disco`(
     `idDisco` INT PRIMARY KEY AUTO_INCREMENT
     ,`discoPerc` DECIMAL(5,2) NOT NULL
 );

 CREATE TABLE `Data`(
     `idData` INT PRIMARY KEY AUTO_INCREMENT
     ,`momento` DATETIME NOT NULL
 );
 
CREATE TABLE `Maquina`(
    `idMaquina` INT PRIMARY KEY AUTO_INCREMENT
    ,`macAddress` CHAR(12)
    ,`fkCpu` INT, FOREIGN KEY (`fkCpu`) REFERENCES `Cpu`(`idCpu`)
    ,`fkRam` INT, FOREIGN KEY (`fkRam`) REFERENCES `Ram`(`idRam`)
    ,`fkDisco` INT, FOREIGN KEY (`fkDisco`) REFERENCES `Disco`(`idDisco`)
    ,`fkData` INT, FOREIGN KEY (`fkData`) REFERENCES `Data` (`idData`)
);

CREATE TABLE `SistemaOperacional`(
    `idSO` INT PRIMARY KEY AUTO_INCREMENT
    ,`kernel` VARCHAR(45) NOT NULL
    ,`distribuicao` VARCHAR(45) NOT NULL
    ,`versao` VARCHAR(45) NOT NULL
);

CREATE TABLE `Usuario`(
    `idUsuario` INT PRIMARY KEY AUTO_INCREMENT
    ,`fkData` INT, FOREIGN KEY (`fkData`) REFERENCES `Data` (`idData`)
    ,`fkSO` INT, FOREIGN KEY (`fkSO`) REFERENCES `SistemaOperacional` (`idSO`)
    ,`rootName` VARCHAR(45) NOT NULL
);