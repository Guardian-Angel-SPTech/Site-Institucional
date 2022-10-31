INSERT INTO empresa (cnpj, email, nomeEmpresa)
		VALUES (50664774000195, "exemploEmail@gmail.com", "exemploEmpresa");

INSERT INTO funcionario (nome, cpf, email, senha, nivelAcesso, fkEmpresa)
		VALUES ("nomeUsuario", 57533781023, "emailUsuario@gmail.com", MD5(123), 1, 1),
			   ("nomeUsuario2", 36026399089, "emailUsuario2@gmail.com", MD5(123), 1, 1),
               ("nomeUsuario3", 17920819016, "emailUsuario3@gmail.com", MD5(123), 1, 1);

INSERT INTO maquina (nomeMaquina, fkEmpresa)
		VALUES ("maquinaUsuario", 1),
			   ("maquinaUsuario2", 1),
               ("maquinaUsuario3", 1);
