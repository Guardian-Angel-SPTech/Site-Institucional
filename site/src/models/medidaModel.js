const database = require("../database/config");

function buscarBateria(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    SELECT registroComponente
    ,FORMAT(horaRegistro, 'hh:mm') AS 'horaRegistro'
    FROM registro
    WHERE componente = 4
    AND fkMaquina = ${idFuncionario}
    AND dataRegistro >= DATEADD(DAY,-1,GETDATE())
    ORDER BY idRegistro desc;`

  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
    SELECT registroComponente
    ,FORMAT(horaRegistro, 'hh:mm') AS 'horaRegistro'
    FROM registro
    WHERE componente = 4
    AND fkMaquina = ${idFuncionario}
    AND dataRegistro >= DATEADD(DAY,-1,GETDATE())
    ORDER BY idRegistro desc;`

  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarBateriaMesAnterior(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    SELECT registroComponente, FORMAT(dataRegistro, 'dd/MM') AS 'data'
    FROM registro
    WHERE componente = 4 AND fkMaquina = ${idFuncionario}
    AND  dataRegistro >= DATEADD(DAY,-30,GETDATE()) 
    AND   dataRegistro <= GETDATE()
    ORDER BY idRegistro DESC;`

  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
    SELECT registroComponente, FORMAT(dataRegistro, 'dd/MM') AS 'data'
    FROM registro
    WHERE componente = 4 AND fkMaquina = ${idFuncionario}
    AND  dataRegistro >= DATEADD(DAY,-30,GETDATE()) 
    AND   dataRegistro <= GETDATE()
    ORDER BY idRegistro DESC`

  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function kpiMediaBateriaDia(idFuncionario) {
    instrucaoSql = "";
  
    if (process.env.AMBIENTE_PROCESSO == "producao") {
      instrucaoSql = `
      SELECT AVG(registroComponente) AS 'media'
      FROM registro
      WHERE componente = 4 AND fkMaquina = ${idFuncionario}
      AND dataRegistro >= DATEADD(DAY,-1,GETDATE()) 
      AND dataRegistro <= GETDATE();`
  
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
      instrucaoSql = `
      SELECT AVG(registroComponente) AS 'media'
      FROM registro
      WHERE componente = 4 AND fkMaquina = ${idFuncionario}
      AND dataRegistro >= DATEADD(DAY,-1,GETDATE()) 
      AND dataRegistro <= GETDATE();`
  
    } else {
      console.log(
        "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
      );
      return;
    }
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
  
function kpiMediaBateriaMesAnterior(idFuncionario) {
    instrucaoSql = "";
  
    if (process.env.AMBIENTE_PROCESSO == "producao") {
      instrucaoSql = `
      SELECT AVG(registroComponente) AS 'media'
      FROM registro
      WHERE componente = 4 AND fkMaquina = ${idFuncionario}
      AND dataRegistro >= DATEADD(DAY,-30,GETDATE()) 
      AND dataRegistro <= GETDATE();`
  
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
      instrucaoSql = `
      SELECT AVG(registroComponente) AS 'media'
      FROM registro
      WHERE componente = 4 AND fkMaquina = ${idFuncionario}
      AND dataRegistro >= DATEADD(DAY,-30,GETDATE()) 
      AND dataRegistro <= GETDATE();`
  
    } else {
      console.log(
        "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
      );
      return;
    }
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
  
function buscarUltimasMedidasRAM(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    SELECT TOP 7 registroComponente,FORMAT(horaRegistro, 'hh:mm:ss')  as 'horaRegistro' FROM registro INNER JOIN maquina ON fkMaquina = idMaquina 
    INNER JOIN funcionario ON idFuncionario = ${idFuncionario}
    and componente = 1 order by idRegistro desc;`
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 1
      ORDER BY idRegistro desc LIMIT 10;`
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUltimasMedidasSwap(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    SELECT TOP 7 registroComponente,FORMAT(horaRegistro, 'hh:mm:ss')  as 'horaRegistro' FROM registro INNER JOIN maquina ON fkMaquina = idMaquina 
    INNER JOIN funcionario ON idFuncionario = ${idFuncionario}
    and componente = 5 order by idRegistro desc;`
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 5
      ORDER BY idRegistro desc LIMIT 10;`
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUltimasMedidasCPU(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    SELECT TOP 7 registroComponente, FORMAT(horaRegistro, 'hh:mm:ss')  as 'horaRegistro'  FROM registro INNER JOIN maquina ON fkMaquina = idMaquina 
    INNER JOIN funcionario ON idFuncionario = ${idFuncionario}
    and componente = 2 order by idRegistro desc;`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 2
      ORDER BY idRegistro desc LIMIT 10;`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUltimasMedidasDisco(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `   SELECT TOP 7 registroComponente,FORMAT(horaRegistro, 'hh:mm:ss')  as 'horaRegistro'  FROM registro INNER JOIN maquina ON fkMaquina = idMaquina 
    INNER JOIN funcionario ON idFuncionario = ${idFuncionario}
    and componente = 3 order by idRegistro desc;`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 3
      ORDER BY idRegistro desc LIMIT 10;`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarBateria(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
      SELECT TOP 1 registroComponente, FORMAT(horaRegistro, 'hh:mm') AS 'horaRegistro'
      FROM registro
      WHERE componente = 4 AND fkMaquina = ${idFuncionario}
      ORDER BY idRegistro desc;`;

  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente, FORMAT(horaRegistro, 'hh:mm:ss') AS 'horaRegistro'
      FROM registro
      WHERE componente = 4 AND fkMaquina = ${idFuncionario}
      ORDER BY idRegistro desc
      LIMIT 1;`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealRAM(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `SELECT TOP 1 registroComponente,FORMAT(horaRegistro, 'hh:mm:ss')  as 'horaRegistro'  FROM registro INNER JOIN maquina ON fkMaquina = idMaquina INNER JOIN 
    funcionario ON idFuncionario = ${idFuncionario} and componente = 1 order by idRegistro desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 1
      ORDER BY idRegistro desc LIMIT 1;
      `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealSwap(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `SELECT TOP 1 registroComponente,FORMAT(horaRegistro, 'hh:mm:ss')  as 'horaRegistro'  FROM registro INNER JOIN maquina ON fkMaquina = idMaquina INNER JOIN 
    funcionario ON idFuncionario = ${idFuncionario} and componente = 5 order by idRegistro desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 5
      ORDER BY idRegistro desc LIMIT 1;
      `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealCPU(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `SELECT TOP 1 registroComponente,FORMAT(horaRegistro, 'hh:mm:ss')  as 'horaRegistro'  FROM registro INNER JOIN maquina ON fkMaquina = idMaquina INNER JOIN 
    funcionario ON idFuncionario = ${idFuncionario} and componente = 2 order by idRegistro desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 2
      ORDER BY idRegistro desc LIMIT 1;`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealCPU(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `SELECT TOP 1 registroComponente,FORMAT(horaRegistro, 'hh:mm:ss')  as 'horaRegistro'  FROM registro INNER JOIN maquina ON fkMaquina = idMaquina INNER JOIN 
    funcionario ON idFuncionario = ${idFuncionario} and componente = 2 order by idRegistro desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 2
      ORDER BY idRegistro desc LIMIT 1;`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealDisco(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    SELECT TOP 1 registroComponente,FORMAT(horaRegistro, 'hh:mm:ss')  as 'horaRegistro'  FROM registro INNER JOIN maquina ON fkMaquina = idMaquina INNER JOIN 
    funcionario ON idFuncionario = ${idFuncionario} and componente = 3 order by idRegistro desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where        idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 3
      ORDER BY idRegistro desc LIMIT 1;`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function pegarProcessos(idFuncionario) {
  instrucaoSql = `SELECT top 1 processos, usoProcesso FROM maquina where fkFuncionario = ${idFuncionario} order by idRegistro desc;`;
  return database.executar(instrucaoSql);
}

function mediaCPUDiaria(idMaquina) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = ` SELECT AVG(registroComponente) as registroComponente,FORMAT(dataRegistro, 'dd-MM-yy')  as 'dataRegistro'  FROM registro  where componente = 2 and fkMaquina = ${idMaquina} group by dataRegistro order by dataRegistro `;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function pegarCPUDiariaTempoReal(idMaquina) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = ` SELECT AVG(registroComponente) as 'registroComponente' ,FORMAT(dataRegistro, 'dd-MM-yy')  as 'dataRegistro'  FROM registro  where componente = 2 and fkMaquina = ${idMaquina} group by dataRegistro order by dataRegistro desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }


  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function mediaRAMDiaria(idMaquina) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = ` SELECT AVG(registroComponente) as registroComponente,FORMAT(dataRegistro, 'dd-MM-yy')  as 'dataRegistro'  FROM registro  where componente = 1 and fkMaquina = ${idMaquina} group by dataRegistro order by dataRegistro `;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function pegarRAMDiariaTempoReal(idMaquina) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = ` SELECT AVG(registroComponente) as 'registroComponente' ,FORMAT(dataRegistro, 'dd-MM-yy')  as 'dataRegistro'  FROM registro  where componente = 1 and fkMaquina = ${idMaquina} group by dataRegistro order by dataRegistro desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }


  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function mediaDiscoDiaria(idMaquina) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = ` SELECT AVG(registroComponente) as registroComponente,FORMAT(dataRegistro, 'dd-MM-yy')  as 'dataRegistro'  FROM registro  where componente = 3 and fkMaquina = ${idMaquina} group by dataRegistro order by dataRegistro `;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function pegarDiscoDiariaTempoReal(idMaquina) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = ` SELECT AVG(registroComponente) as 'registroComponente' ,FORMAT(dataRegistro, 'dd-MM-yy')  as 'dataRegistro'  FROM registro  where componente = 3 and fkMaquina = ${idMaquina} group by dataRegistro order by dataRegistro desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }


  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



// INDIVIDUAL MIGUEL

function pegarUpload(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    SELECT TOP 7 registroComponente, format(horaRegistro, 'hh:mm:ss') as horaRegistro FROM registro INNER JOIN maquina ON fkMaquina = idMaquina 
    INNER JOIN funcionario ON idFuncionario = ${idFuncionario}
    and componente = 6 order by idRegistro desc;`
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 6
      ORDER BY idRegistro desc LIMIT 10;`
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function pegarMediaUpload(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    SELECT avg(registroComponente) as registroComponente FROM registro INNER JOIN maquina ON fkMaquina = idMaquina 
    INNER JOIN funcionario ON idFuncionario = ${idFuncionario}
    and componente = 6;`
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = ``
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function pegarDownload(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    SELECT TOP 7 registroComponente,format(horaRegistro, 'hh:mm:ss') as horaRegistro FROM registro INNER JOIN maquina ON fkMaquina = idMaquina 
    INNER JOIN funcionario ON idFuncionario = ${idFuncionario}
    and componente = 7 order by idRegistro desc;`
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 7
      ORDER BY idRegistro desc LIMIT 10;`
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function pegarMediaDownload(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `
    SELECT avg(registroComponente) as registroComponente FROM registro INNER JOIN maquina ON fkMaquina = idMaquina 
    INNER JOIN funcionario ON idFuncionario = ${idFuncionario}
    and componente = 7;`
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = ``
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function pegarUploadTempoReal(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `SELECT TOP 1 registroComponente FROM registro INNER JOIN maquina ON fkMaquina = idMaquina INNER JOIN 
    funcionario ON idFuncionario = ${idFuncionario} and componente = 6 order by idRegistro desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 6
      ORDER BY idRegistro desc LIMIT 1;`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function pegarDownloadTempoReal(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `SELECT TOP 1 registroComponente FROM registro INNER JOIN maquina ON fkMaquina = idMaquina INNER JOIN 
    funcionario ON idFuncionario = ${idFuncionario} and componente = 7 order by idRegistro desc`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
      SELECT registroComponente FROM registro 
      INNER JOIN maquina ON fkMaquina = idMaquina and fkMaquina = (select idFuncionario from funcionario where idFuncionario = ${idFuncionario}) 
      INNER JOIN funcionario ON idFuncionario = ${idFuncionario} and componente = 7
      ORDER BY idRegistro desc LIMIT 1;`;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarBateria,
  buscarBateriaMesAnterior,
  kpiMediaBateriaDia,
  kpiMediaBateriaMesAnterior,
  buscarUltimasMedidasRAM,
  buscarUltimasMedidasSwap,
  buscarUltimasMedidasCPU,
  buscarUltimasMedidasDisco,
  buscarMedidasEmTempoRealRAM,
  buscarMedidasEmTempoRealSwap,
  buscarMedidasEmTempoRealCPU,
  buscarMedidasEmTempoRealDisco,
  atualizarBateria,
  pegarProcessos,
  mediaCPUDiaria,
  pegarCPUDiariaTempoReal,
  mediaRAMDiaria,
  pegarRAMDiariaTempoReal,
  mediaDiscoDiaria,
  pegarDiscoDiariaTempoReal,
  pegarDownload,
  pegarUpload,
  pegarDownloadTempoReal,
  pegarUploadTempoReal,
  pegarMediaDownload,
  pegarMediaUpload
};