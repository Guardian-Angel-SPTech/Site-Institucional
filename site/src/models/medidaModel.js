const database = require("../database/config");

function buscarUltimasMedidasRAM(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP ${limite_linhas}
        temperatura, umidade, horario,
                        CONVERT(varchar, horario, 108) as horario
                    FROM dadosSensor
                    WHERE fkSensor = ${fkSensor}
                    ORDER BY idDado DESC`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT * FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN usuario ON fkUsuario = idUsuario WHERE fkUsuario = ${idUsuario} and componente = 1 limit 10`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasCPU(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP ${limite_linhas}
        temperatura, umidade, horario,
                        CONVERT(varchar, horario, 108) as horario
                    FROM dadosSensor
                    WHERE fkSensor = ${fkSensor}
                    ORDER BY idDado DESC`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT * FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN usuario ON fkUsuario = idUsuario WHERE fkUsuario = ${idUsuario} and componente = 2 limit 10`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarUltimasMedidasDisco(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP ${limite_linhas}
        temperatura, umidade, horario,
                        CONVERT(varchar, horario, 108) as horario
                    FROM dadosSensor
                    WHERE fkSensor = ${fkSensor}
                    ORDER BY idDado DESC`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT * FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN usuario ON fkUsuario = idUsuario WHERE fkUsuario = ${idUsuario} and componente = 3 limit 10`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoRealRAM(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 1
        temperatura, umidade, 
                        CONVERT(varchar, horario, 108) as horario, 
                        fkSensor 
                        FROM dadosSensor WHERE fkSensor = ${fkSensor} 
                    ORDER BY idDado DESC`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT * FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN usuario ON fkUsuario = idUsuario WHERE fkUsuario = ${idUsuario} and componente = 1 limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealCPU(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 1
        temperatura, umidade, 
                        CONVERT(varchar, horario, 108) as horario, 
                        fkSensor 
                        FROM dadosSensor WHERE fkSensor = ${fkSensor} 
                    ORDER BY idDado DESC`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT * FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN usuario ON fkUsuario = idUsuario WHERE fkUsuario = ${idUsuario} and componente = 2 limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealDisco(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 1
        temperatura, umidade, 
                        CONVERT(varchar, horario, 108) as horario, 
                        fkSensor 
                        FROM dadosSensor WHERE fkSensor = ${fkSensor} 
                    ORDER BY idDado DESC`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT * FROM registro INNER JOIN Maquina ON fkMaquina = idMaquina INNER JOIN usuario ON fkUsuario = idUsuario WHERE fkUsuario = ${idUsuario} and componente = 3 limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarProcessos(idUsuario) {
    instrucaoSql = `SELECT processos, usoProcesso FROM maquina where fkUsuario = 1 limit 10`;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidasRAM,
    buscarUltimasMedidasCPU,
    buscarUltimasMedidasDisco,
    buscarMedidasEmTempoRealRAM,
    buscarMedidasEmTempoRealCPU,
    buscarMedidasEmTempoRealDisco,
    pegarProcessos
}