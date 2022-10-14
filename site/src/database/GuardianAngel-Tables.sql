create database GuardianAngel;
use GuardianAngel;

create table empresa (
idEmpresa int primary key auto_increment,
cnpj char(14),
email varchar(20),
nomeEmpresa varchar(45)
);

select * from empresa;
select * from usuario;

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
processos varchar(45),
usoProcesso decimal(4,2),
fkUsuario int,
foreign key usuario(fkUsuario) references usuario(idUsuario)
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
RegistroComponente decimal,
horaRegistro datetime,
primary key(idRegistro, fkMaquina)
);