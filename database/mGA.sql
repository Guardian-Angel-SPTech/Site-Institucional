create database GAm;
use GAm;
create table cpuM(
	idCpu int primary key,
    modelo varchar(80)
);
create table ram(
	idRam int primary key,
    capacidadeTotal decimal
);
create table disco(
	idDisco int primary key,
    capacidadeTotal decimal
);
create table usuario(
	idUsuario int primary key,
    nome varchar(45),
    cpf char(11),
    email varchar(30),
    senha varchar(45),
    nivelAcesso char(1)
);
create table empresa(
	idEmpresa int primary key,
    cnpj char(14),
    nomeEmpresa varchar(45)
);
create table monitoramentoCpu(
	idMonitoramentoCpu int primary key,
    uso double(4,2),
    momento datetime,
    fkCpu int,
    foreign key monitoramentoCpu (fkCpu) references cpuM (idCpu)
);
create table monitoramentoRam(
	idMonitoramentoRam int primary key,
    uso double(4,2),
    momento datetime,
    fkRam int,
    foreign key monitoramentoRam (fkRam) references ram (idRam)
);
create table monitoramentoDisco(
	idMonitoramentoDisco int primary key,
    uso double(4,2),
    momento datetime,
    fkDisco int,
    foreign key monitoramentoDisco (fkDisco) references disco (idDisco)
);
create table alertas(
	idAlertas int primary key,
    momentoAlerta datetime,
	fkAlertaCpu int,
    foreign key alertas(fkAlertaCpu) references monitoramentoCpu (idMonitoramentoCpu),
	fkAlertaDisco int,
    foreign key alertasD(fkAlertaDisco) references monitoramentoDisco (idMonitoramentoDisco),
	fkAlertaRam int,
    foreign key alertasR(fkAlertaRam) references monitoramentoRam (idMonitoramentoRam)
);
create table maquina(
	idMaquina int primary key,
    nomeMaquina varchar(45),
    mac char(17),
	fkCpu int,
    foreign key fkCpu(fkCpu) references cpuM (idCpu),
	fkEmpresa int,
    foreign key fkEmpresa(fkEmpresa) references empresa (idEmpresa),
	fkUsuario int,
    foreign key fkUsuario(fkUsuario) references usuario (idUsuario),
	fkRam int,
    foreign key fkRam(fkRam) references ram (idRam)
);
create table discoMaquina(
	fkMaquina int,
    foreign key fkMaquina(fkMaquina) references maquina (idMaquina),
	fkDisco int,
    foreign key fkDisco(fkDisco) references disco (idDisco)
);
/*	
	INTEGRANTES:
    
    
	HELDER DAVIDSON RODRIGUES ALVARENGA - 03221027
    JOÃO PEDRO MIZIARA - 02221030
	LUIS HENRIQUE FEITOSA NUNES - 02221067
    MATHEUS BARIZON CAUS - 02221023
    MIGUEL CARVALHO SCHREMPP - 02221029
    RAFAELLA PIOVEZAN FILIPE - 02221036
    
*/
