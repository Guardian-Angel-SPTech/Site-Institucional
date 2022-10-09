# SET @@autocommit = 0;

DELIMITER $$
CREATE PROCEDURE stg_cadastrarNovaEmpresa(
 IN cnpj CHAR(14), IN email VARCHAR(60), IN nomeEmpresa VARCHAR(45)
 ,IN nomeUser VARCHAR(45), IN cpf CHAR(11), IN senha VARCHAR(45), IN acesso CHAR(1))
BEGIN
    DECLARE `erro_sql` TINYINT DEFAULT FALSE;
   	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET `erro_sql` = TRUE;
 	
    START TRANSACTION;
    
        SET @idEmpresa = (SELECT fct_cadastrarEmpresa(cnpj, email, nomeEmpresa));
        SELECT fct_cadastrarUsuario(nomeUser, email, cpf, senha, acesso, @idEmpresa);

		# Verificando erro para dar o commit
	  	 IF `erro_sql` = FALSE THEN
 	  		COMMIT;
  	 		SELECT 'Cadastro realizado com sucesso.' AS `Resultado`;
  	 	ELSE
  	 		ROLLBACK;
  	 		SELECT 'Erro ao realizar cadastro.' AS `Resultado`;
  	 	END IF;
END$$
DELIMITER ;
DELIMITER $$
CREATE PROCEDURE stg_registrarFuncionario(
  IN nomeUser VARCHAR(45), IN email VARCHAR(60), IN cpf CHAR(11), 
  IN senha VARCHAR(45), IN acesso CHAR(1), IN fkEmpresa int)
BEGIN
    DECLARE `erro_sql` TINYINT DEFAULT FALSE;
   	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET `erro_sql` = TRUE;
 	
    START TRANSACTION;
    
        SELECT fct_cadastrarUsuario(nomeUser, email, cpf, senha, acesso, fkEmpresa);

		# Verificando erro para dar o commit
	  	 IF `erro_sql` = FALSE THEN
 	  		COMMIT;
  	 		SELECT 'Cadastro realizado com sucesso.' AS `Resultado`;
  	 	ELSE
  	 		ROLLBACK;
  	 		SELECT 'Erro ao realizar cadastro.' AS `Resultado`;
  	 	END IF;
END$$
DELIMITER ;

drop procedure stg_entrar;