const database = require("../database/config");

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

function mediaCPUDiaria(fkMaquina) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = ` SELECT AVG(registroComponente),FORMAT(dataRegistro, 'dd-MM-yy')  as 'dataRegistro'  FROM registro  where componente = 2 and fkMaquina = ${fkMaquina} group by dataRegistro`;
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


module.exports = {
  buscarUltimasMedidasRAM,
  buscarUltimasMedidasCPU,
  buscarUltimasMedidasDisco,
  buscarMedidasEmTempoRealRAM,
  buscarMedidasEmTempoRealCPU,
  buscarMedidasEmTempoRealDisco,
  pegarProcessos,
  mediaCPUDiaria,
};
