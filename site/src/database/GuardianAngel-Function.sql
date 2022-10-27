DELIMITER $$
CREATE FUNCTION fct_cadastrarEmpresa
 (cnpj CHAR(14), email VARCHAR(60), nomeEmpresa VARCHAR(45))
RETURNS BOOLEAN DETERMINISTIC
BEGIN

	INSERT INTO empresa (cnpj, email, nomeEmpresa)
		VALUES (cnpj, email, nomeEmpresa);
		
    RETURN (SELECT idEmpresa FROM empresa ORDER BY idEmpresa DESC LIMIT 1);
END$$

CREATE FUNCTION fct_cadastrarFuncionario
 (nomeFunc VARCHAR(45), email VARCHAR(60), cpf CHAR(11), senha VARCHAR(45), acesso CHAR(1), fkEmpresa INT)
RETURNS BOOLEAN DETERMINISTIC
BEGIN

	INSERT INTO funcionario (nome, cpf, email, senha, nivelAcesso, fkEmpresa)
		VALUES (nomeFunc, cpf, email, MD5(senha), acesso, fkEmpresa);
		
    RETURN (SELECT idFuncionario FROM funcionario ORDER BY idFuncionario DESC LIMIT 1);
END$$