create database GuardianAngel;
use GuardianAngel;

create table Empresa (
idEmpresa int primary key auto_increment,
cnpj char(14),
email varchar(20),
senha varchar(45),
nomeEmpresa varchar(45)
);

create table Funcionario (
idFuncionario int primary key auto_increment,
nome varchar(45),
cpf char(11),
email varchar(30),
senha varchar(45),
nivelAcesso char(1),
fkEmpresa int,
foreign key Funcionario(fkEmpresa) references Empresa(idEmpresa)
);

create table Maquina (
idMaquina int primary key auto_increment,
nomeMaquina varchar(45),
MAC char(17),
statusMaquina varchar(45),
fkEmpresa int,
foreign key Maquina(fkEmpresa) references Empresa(idEmpresa)
);

create table Chamado (
idChamado int auto_increment,
fkMaquina int,
descChamado varchar(100),
hora datetime,
primary key(idChamado, fkMaquina)
);

create table Registro (
idRegistro int auto_increment,
fkMaquina int,
componente varchar(20),
RegistroComponente varchar(10),
horaRegistro datetime,
primary key(idRegistro, fkMaquina)
);


