create database GuardianAngel;
use GuardianAngel;

create table empresa (
idEmpresa int primary key auto_increment,
cnpj char(14),
email varchar(45),
nomeEmpresa varchar(45)
);

create table funcionario (
idFuncionario int primary key auto_increment,
nome varchar(45),
cpf char(11),
email varchar(45),
senha varchar(45),
nivelAcesso char(1),
fkEmpresa int,
foreign key (fkEmpresa) references empresa (idEmpresa)
);

create table maquina (
idMaquina int primary key auto_increment,
nomeMaquina varchar(45),
MAC char(17),
statusMaquina varchar(45),
processo varchar(45),
usoProcesso decimal(5,2),
sistOp varchar(45),
bootTime varchar(45),
identificadorCpu char(10),
cpuLogica int,
microArquitetura char(10),
numeroCpu int,
fkEmpresa int,
foreign key (fkEmpresa) references empresa (idEmpresa),
fkFuncionario int,
foreign key (fkFuncionario) references funcionario (idFuncionario)
);

create table registro (
idRegistro int auto_increment,
fkMaquina int,
componente varchar(20),
registroComponente decimal,
horaRegistro time,
foreign key (fkMaquina) references maquina (idMaquina),
dataRegistro date,
primary key(idRegistro, fkMaquina)
);

create table chamado (
idChamado int auto_increment,
fkMaquina int,
foreign key (fkMaquina) references maquina (idMaquina),
fkRegistro int,
foreign key (fkRegistro) references registro (idRegistro),
descChamado varchar(100),
hora datetime,
primary key(idChamado, fkMaquina, fkRegistro)
);

SELECT * FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN 
funcionario ON fkFuncionario = idFuncionario WHERE fkFuncionario = idFuncionario and componente = 1 limit 10;