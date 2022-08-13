create database GuardianAngel;
 
use GuardianAngel;

create table Empresa (
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45),
cnpj char(14),
senha varchar(45)
);

create table Maquina (
idMaquina int primary key,
nomeMaquina varchar(20),
stats varchar(10),
fkEmpresa int,
foreign key Maquina(fkEmpresa) references Empresa(idEmpresa)
);

drop table Maquina;

create table registro (
idRegistro int auto_increment,
fkMaquina int,
componente varchar(45),
descricao varchar(100),
foreign key registro(fkMaquina) references Maquina(idMaquina),
primary key (idRegistro, fkMaquina)

);

drop table registro;





