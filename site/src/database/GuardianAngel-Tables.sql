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
processos varchar(45),
usoProcesso decimal(5,2),
sistOp varchar(45),
bootTime varchar(45),
identificadorCpu char(10),
cpuLogica int,
microArquitetura char(10),
numeroCpu int,
fkEmpresa int,
foreign key (fkEmpresa) references empresa (idEmpresa)
);

create table registro (
idRegistro int auto_increment,
fkMaquina int,
componente varchar(20),
registroComponente decimal,
horaRegistro datetime,
foreign key (fkMaquina) references maquina (idMaquina),
dataRegistro datetime,
primary key(idRegistro, fkMaquina)
);

create table chamado (
idChamado int auto_increment,
fkMaquina int,
fkRegistro int,
descChamado varchar(100),
hora datetime,
primary key(idChamado, fkMaquina, fkRegistro)
);

INSERT INTO empresa (cnpj, email, nomeEmpresa)
		VALUES (50664774000195, "exemploEmail@gmail.com", "exemploEmpresa");

INSERT INTO funcionario (nome, cpf, email, senha, nivelAcesso, fkEmpresa)
		VALUES ("nomeUsuario", 57533781023, "emailUsuario@gmail.com", MD5(123), 1, 1),
			   ("nomeUsuario2", 36026399089, "emailUsuario2@gmail.com", MD5(123), 1, 1),
               ("nomeUsuario3", 17920819016, "emailUsuario3@gmail.com", MD5(123), 1, 1);

INSERT INTO maquina (nomeMaquina, fkUsuario)
		VALUES ("maquinaUsuario", 1),
			   ("maquinaUsuario2", 1),
               ("maquinaUsuario3", 1);
               
               SELECT *
        FROM empresa;