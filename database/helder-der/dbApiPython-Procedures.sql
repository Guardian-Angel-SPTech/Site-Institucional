USE `dbApiPython`;

SET @@autocommit = 0;

# Procedure de cadastro da máquina
DELIMITER $$

CREATE PROCEDURE `stg_cadastrarMaquina`
 (IN `kernel` VARCHAR(45), IN `distribuicao` VARCHAR(45), IN `versao` VARCHAR(45)
	, IN `rootName` VARCHAR(45), IN `macAddress` CHAR(12)
	, IN `cpuPerc` DECIMAL(5,2), IN `cpuTemp` DECIMAL(5,2) , IN `core` VARCHAR(2)
    , IN `disco` DECIMAL(5,2), IN `ram` DECIMAL(5,2))
BEGIN 
  	DECLARE `erro_sql` TINYINT DEFAULT FALSE;
   	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET `erro_sql` = TRUE;
 	
    START TRANSACTION;
        SET @idData = (SELECT fct_cadastrarData());
		SET @idSO = (SELECT fct_cadastrarSO(`kernel`, `distribuicao`, `versao`));
        SET @idCpu = (SELECT fct_cadastrarCpu(`cpuPerc`, `cpuTemp`, `core`));
		SET @idDisco = (SELECT fct_cadastrarDisco(`disco`));
		SET @idRam = (SELECT fct_cadastrarRam(`ram`));
        
        SELECT fct_cadastrarUsuario(@idData, @idSO, rootName);
            
		SELECT fct_cadastrarMaquina(macAddress, @idCpu, @idRam, @idDisco, @idData);

		# Verificando erro para dar o commit
	  	 IF `erro_sql` = FALSE THEN
 	  		COMMIT;
  	 		SELECT 'Máquina cadastrada com sucesso.' AS `Resultado`;
  	 	ELSE
  	 		ROLLBACK;
  	 		SELECT 'Erro ao realizar cadastro de máquina.' AS `Resultado`;
  	 	END IF;
    
END$$
DELIMITER ;