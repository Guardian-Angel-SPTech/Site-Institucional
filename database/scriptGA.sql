create database GAm;
use GAm;

create table empresa(
	idEmpresa int primary key,
    cnpj char(14),
    nomeEmpresa varchar(45)
);
create table monitoramentoCpu(
	idMonitoramentoCpu int primary key,
    uso double(4,2),
    momento datetime
);
create table monitoramentoRam(
	idMonitoramentoRam int primary key,
    uso double(4,2),
    momento datetime
);
create table monitoramentoDisco(
	idMonitoramentoDisco int primary key,
    uso double(4,2),
    momento datetime
);

select * from maquina;

create table maquina(
	idMaquina int primary key,
    nomeMaquina varchar(45),
    mac char(17),
	fkCpu int,
    foreign key fkCpu(fkCpu) references monitoramentoCpu (idMonitoramentoCpu),
	fkEmpresa int,
    foreign key fkEmpresa(fkEmpresa) references empresa (idEmpresa),
	fkDisco int,
    foreign key fkDisco(fkDisco) references monitoramentoDisco (idMonitoramentoDisco),
	fkRam int,
    foreign key fkRam(fkRam) references monitoramentoRam (idMonitoramentoRam)
);

CREATE VIEW dadosMaquina
AS 
	select idMaquina, monitoramentoCpu.momento, monitoramentoCpu.uso as usoCpu, monitoramentoDisco.uso as usoDisco, monitoramentoRam.uso as usoRam from maquina join monitoramentoCpu on idMonitoramentoCPu = maquina.fkCpu
					 join monitoramentoRam on idMonitoramentoRam = maquina.fkRam
                     join monitoramentoDisco on idMonitoramentoDisco = maquina.fkDisco;
                     
select * from dadosMaquina;
/*	
	INTEGRANTES:
    
	HELDER DAVIDSON RODRIGUES ALVARENGA - 03221027
    JOÃO PEDRO MIZIARA - 02221030
	LUIS HENRIQUE FEITOSA NUNES - 02221067
    MATHEUS BARIZON CAUS - 02221023
    MIGUEL CARVALHO SCHREMPP - 02221029
    RAFAELLA PIOVEZAN FILIPE - 02221036
    
*/
