const database = require("../database/config")

function listar() {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    const instrucao = `
        SELECT * FROM funcionario ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(cnpj, senha) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnpj, senha)
    const instrucao = `
        SELECT *
        FROM funcionario
            INNER JOIN empresa
                ON idEmpresa = fkEmpresa
        WHERE cnpj = '${cnpj}'
        AND senha = MD5('${senha}') LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrarE(email, senha) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    const instrucao = `
        SELECT *
        FROM funcionario
            INNER JOIN empresa
                ON idEmpresa = fkEmpresa
        WHERE funcionario.email = '${email}'
        AND senha = MD5('${senha}') LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a const instrucao
function cadastrar(nomeUser, nomeEmpresa, cpf, cnpj, email, acesso, senha) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeUser, nomeEmpresa, cpf, cnpj, email, acesso, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    const instrucao = `CALL stg_cadastrarNovaEmpresa('${cnpj}', '${email}', '${nomeEmpresa}', '${nomeUser}','${cpf}', '${senha}', '${acesso}')`;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function registrarfuncionario(nomeUser, email, cpf, senha, acesso, idEmpresa) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarfuncionario():", nomeUser, cpf, acesso, senha, idEmpresa);

    const instrucao = `
        CALL stg_registrarFuncionario ('${nomeUser}', '${email}', '${cpf}', '${senha}', '${acesso}', '${idEmpresa}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function listarfuncionario(idEmpresa) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarfuncionario():", idEmpresa);
    const instrucao = `
        
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar(cnpj){
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT idFuncionario,nome FROM funcionario JOIN empresa ON cnpj = ${cnpj} and funcionario.fkempresa = empresa.idEmpresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function excluirfuncionario(idFuncionario) {
    console.log("ACESSEI O FUNCIONARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function excluirFuncionario():", idFuncionario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    const instrucao = `
        CALL stg_excluirFuncionario ('${idFuncionario}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    registrarfuncionario,
    listarfuncionario,
    excluirfuncionario,
    listar,
    entrarE
};