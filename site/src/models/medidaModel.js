const database = require("../database/config");

function buscarUltimasMedidasRAM(idFuncionario) {
  instrucaoSql = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucaoSql = `SELECT TOP ${limite_linhas}
        temperatura, umidade, horario,
                        CONVERT(varchar, horario, 108) as horario
                    FROM dadosSensor
                    WHERE fkSensor = ${fkSensor}
                    ORDER BY idDado DESC`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
        SELECT registroComponente FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN 
        funcionario ON fkFuncionario = idFuncionario WHERE fkFuncionario = ${idFuncionario} and componente = 1 order by idRegistro desc limit 10 `;
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
    instrucaoSql = `SELECT TOP ${limite_linhas}
        temperatura, umidade, horario,
                        CONVERT(varchar, horario, 108) as horario
                    FROM dadosSensor
                    WHERE fkSensor = ${fkSensor}
                    ORDER BY idDado DESC`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
        SELECT registroComponente FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN 
        funcionario ON fkFuncionario = idFuncionario WHERE fkFuncionario = ${idFuncionario} and componente = 2 order by idRegistro desc limit 10 `;
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
    instrucaoSql = `SELECT TOP ${limite_linhas}
        temperatura, umidade, horario,
                        CONVERT(varchar, horario, 108) as horario
                    FROM dadosSensor
                    WHERE fkSensor = ${fkSensor}
                    ORDER BY idDado DESC`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
        SELECT registroComponente FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN 
        funcionario ON fkFuncionario = idFuncionario WHERE fkFuncionario = ${idFuncionario} and componente = 3 order by idRegistro desc limit 10 `;
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
    instrucaoSql = `SELECT TOP 1
        temperatura, umidade, 
                        CONVERT(varchar, horario, 108) as horario, 
                        fkSensor 
                        FROM dadosSensor WHERE fkSensor = ${fkSensor} 
                    ORDER BY idDado DESC`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
        SELECT registroComponente FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN 
        funcionario ON fkFuncionario = idFuncionario WHERE fkFuncionario = ${idFuncionario} and componente = 1 order by idRegistro desc limit 1 `;
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
    instrucaoSql = `SELECT TOP 1
        temperatura, umidade, 
                        CONVERT(varchar, horario, 108) as horario, 
                        fkSensor 
                        FROM dadosSensor WHERE fkSensor = ${fkSensor} 
                    ORDER BY idDado DESC`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
        SELECT registroComponente FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN 
        funcionario ON fkFuncionario = idFuncionario WHERE fkFuncionario = ${idFuncionario} and componente = 2 order by idRegistro desc limit 1 `;
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
    instrucaoSql = `SELECT TOP 1
        temperatura, umidade, 
                        CONVERT(varchar, horario, 108) as horario, 
                        fkSensor 
                        FROM dadosSensor WHERE fkSensor = ${fkSensor} 
                    ORDER BY idDado DESC`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucaoSql = `
        SELECT registroComponente FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN 
        funcionario ON fkFuncionario = idFuncionario WHERE fkFuncionario = ${idFuncionario} and componente = 3 order by idRegistro desc limit 1 `;
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
  instrucaoSql = `SELECT processos, usoProcesso FROM maquina where fkFuncionario = ${idFuncionario} order by idRegistro desc limit 10 `;
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
};
