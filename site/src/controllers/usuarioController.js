const usuarioModel = require("../models/usuarioModel");

const sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    const email = req.body.emailServer;
    const pass = req.body.passServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (pass == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, pass)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        console.log(resultado);
                        res.json(resultado[0]);
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    const nameUser = req.body.nameServer;
    const nameCorp = req.body.nameCorpServer;
    const cnpj = req.body.cnpjServer;
    const email = req.body.emailServer;
    const position = req.body.positionServer;
    const pass = req.body.passServer;

    // Faça as validações dos valores
    if (nameUser == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (nameCorp == undefined) {
        res.status(400).send("O nome da empresa está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu CNPJ está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (position == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (pass == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nameUser, nameCorp, cnpj, email, position, pass)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function registrarusuario(req, res) {
    const nameUser = req.body.nameServer;
    const email = req.body.emailServer;
    const position = req.body.positionServer;
    const idEmpresa = req.body.idEmpresaServer;
    const pass = req.body.passServer;

    // Faça as validações dos valores
    if (nameUser == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (position == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (idEmpresa == undefined) {
        res.status(400).send("idEmpresa está undefined!");
    } else if (pass == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {     
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.registrarusuario(nameUser, email, position, pass, idEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listarusuario(req, res) {
    const idEmpresa = req.body.idEmpresaServer;

    if (idEmpresa == undefined) {
        res.status(400).send("Seu idEmpresa está undefined!");
    } else {
        usuarioModel.listarusuario(idEmpresa)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    console.log(resultado);
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao listar usuários! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function excluirusuario(req, res) {
    const idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.excluirusuario(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao excluir esse usuário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar,
    registrarusuario,
    listarusuario,
    excluirusuario,
    listar,
    testar
}