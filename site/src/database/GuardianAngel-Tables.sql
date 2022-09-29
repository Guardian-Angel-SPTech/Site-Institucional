create database GuardianAngel;
use GuardianAngel;

create table empresa (
idEmpresa int primary key auto_increment,
cnpj char(14),
email varchar(20),
nomeEmpresa varchar(45)
);

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
cpf char(11),
email varchar(30),
senha varchar(45),
nivelAcesso char(1),
fkEmpresa int,
foreign key usuario(fkEmpresa) references empresa(idEmpresa)
);

create table maquina (
idMaquina int primary key auto_increment,
nomeMaquina varchar(45),
MAC char(17),
statusMaquina varchar(45),
fkEmpresa int,
foreign key maquina(fkEmpresa) references empresa(idEmpresa)
);

create table chamado (
idChamado int auto_increment,
fkMaquina int,
fkRegistro int,
descChamado varchar(100),
hora datetime,
primary key(idChamado, fkMaquina, fkRegistro)
);

create table registro (
idRegistro int auto_increment,
fkMaquina int,
componente varchar(20),
RegistroComponente varchar(10),
horaRegistro datetime,
primary key(idRegistro, fkMaquina)
);

create table componente (
idComponente int primary key auto_increment,
statusComponente varchar(10),
nomeComponente varchar(20)
);