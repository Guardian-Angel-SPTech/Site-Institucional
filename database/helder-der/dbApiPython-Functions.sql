USE `dbApiPython`;

DELIMITER $$
CREATE FUNCTION `fct_cadastrarCpu`
 (`cpuPerc` DECIMAL(5,2), `cpuTemp` DECIMAL(5,2), `core` VARCHAR(2))
RETURNS BOOLEAN DETERMINISTIC
BEGIN

	INSERT INTO `Cpu` (`cpuPerc`, `cpuTemp`, `core`)
		VALUES (`cpuPerc`, `cpuTemp`, `core`);
		
    RETURN (SELECT `idCpu` FROM `Cpu` ORDER BY `idCpu` DESC LIMIT 1);
END$$
DELIMITER ;

DELIMITER $$
CREATE FUNCTION `fct_cadastrarRam`
 (`ramPerc` DECIMAL(5,2))
RETURNS BOOLEAN DETERMINISTIC
BEGIN

	INSERT INTO `Ram` (`ramPerc`)
		VALUES (`ramPerc`);
        
    RETURN (SELECT `idRam` FROM `Ram` ORDER BY `idRam` DESC LIMIT 1);
END$$
DELIMITER ;

DELIMITER $$
CREATE FUNCTION `fct_cadastrarDisco`
 (`discoPerc` DECIMAL(5,2))
RETURNS BOOLEAN DETERMINISTIC
BEGIN

	INSERT INTO `Disco` (`discoPerc`)
		VALUES (`discoPerc`);
        
    RETURN (SELECT `idDisco` FROM `Disco` ORDER BY `idDisco` DESC LIMIT 1);
END$$
DELIMITER ;

DELIMITER $$
CREATE FUNCTION `fct_cadastrarData`()
RETURNS BOOLEAN DETERMINISTIC
BEGIN

	INSERT INTO `Data` (`momento`)
		VALUES (CURRENT_TIMESTAMP);
        
    RETURN (SELECT `idData` FROM `Data` ORDER BY `idData` DESC LIMIT 1);
END$$
DELIMITER ;

DELIMITER $$
CREATE FUNCTION `fct_cadastrarSO`
 (`kernel` VARCHAR(45), `distribuicao` VARCHAR(45), `versao` VARCHAR(45))
RETURNS BOOLEAN DETERMINISTIC
BEGIN

	INSERT INTO `SistemaOperacional` (`kernel`, `distribuicao`, `versao`)
		VALUES (`kernel`, `distribuicao`, `versao`);
        
    RETURN (SELECT `idSO` FROM `SistemaOperacional` ORDER BY `idSO` DESC LIMIT 1);
END$$
DELIMITER ;

DELIMITER $$
CREATE FUNCTION `fct_cadastrarMaquina`
 (`macAddress` CHAR(12), `fkCpu` INT, `fkRam` INT, `fkDisco` INT, `fkData` INT)
RETURNS BOOLEAN DETERMINISTIC
BEGIN

	INSERT INTO `Maquina` (`macAddress`, `fkCpu`, `fkRam`, `fkDisco`, `fkData`)
		VALUES (`macAddress`, `fkCpu`, `fkRam`, `fkDisco`, `fkData`);
        
        RETURN TRUE;
END$$
DELIMITER ;

DELIMITER $$
CREATE FUNCTION `fct_cadastrarUsuario`
 (`fkData` INT, `fkSO` INT, `rootName` VARCHAR(45))
RETURNS BOOLEAN DETERMINISTIC
BEGIN

	INSERT INTO `Usuario` (`fkData`, `fkSO`, `rootName`)
			VALUES (`fkData`, `fkSO`, `rootName`);
        
        RETURN TRUE;
END$$
DELIMITER ;