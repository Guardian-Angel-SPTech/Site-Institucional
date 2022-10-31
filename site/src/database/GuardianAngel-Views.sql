CREATE VIEW vw_pioresMaquinas
AS
SELECT idMaquina, nomeMaquina, MAC, statusMaquina, sistOp
		, fkEmpresa , componente, registroComponente
FROM maquina
	INNER JOIN registro
		ON idMaquina = fkMaquina
    ORDER BY registroComponente ASC
    LIMIT 10;
    
select * from vw_pioresMaquinas;