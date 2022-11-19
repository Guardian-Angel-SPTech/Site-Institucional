create database GuardianAngel;
use GuardianAngel;

create table empresa (
idEmpresa int primary key auto_increment,
cnpj char(14) unique,
email varchar(45) unique,
nomeEmpresa varchar(45)
);

create table maquina (
idMaquina int primary key auto_increment,
sistOp varchar(45),
fkEmpresa int,
foreign key (fkEmpresa) references empresa (idEmpresa)
);

create table funcionario (
idFuncionario int primary key auto_increment,
nome varchar(45),
cpf char(11),
email varchar(45),
senha varchar(45),
nivelAcesso char(1),
fkEmpresa int,
foreign key (fkEmpresa) references empresa (idEmpresa),
fkMaquina int,
foreign key (fkMaquina) references maquina (idMaquina)
);

create table processo(
idProcesso int auto_increment,
fkMaquina int,
nomeProcesso varchar(20),
usoCpu decimal,
horaRegistro time,
dataRegistro date,
primary key(idProcesso, fkMaquina)
);

create table registro (
idRegistro int auto_increment,
fkMaquina int,
componente varchar(20),
registroComponente decimal,
horaRegistro time,
dataRegistro date,
primary key(idRegistro, fkMaquina)
);

insert into empresa values
(null, '43669182000109', 'empresa1', 'empresa' );

insert into funcionario(nome, email, senha, fkEmpresa) values 
('joao', 'joao@gmail.com', '123', 1);

insert into funcionario(nome, email, senha, fkempresa) values 
('jorge', 'jorge@gmail.com', '123', 1);

insert into maquina(idMaquina,sistOp,fkEmpresa) values
(null, "Windows", 1);

SELECT * FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN 
funcionario ON fkFuncionario = idFuncionario WHERE fkFuncionario = idFuncionario and componente = 1 limit 10;
