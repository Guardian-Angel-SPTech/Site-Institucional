const express = require("express");
const router = express.Router();

const funcionarioController = require("../controllers/funcionarioController");

router.get("/", function (req, res) {
    funcionarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    funcionarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de funcionarioontroller.js
router.post("/cadastrar", function (req, res) {
    funcionarioController.cadastrar(req, res);
})

router.post("/registrarfuncionario", function (req, res) {
    funcionarioController.registrarfuncionario(req, res);
})

router.post("/listarfuncionario", function (req, res) {
    funcionarioController.listarfuncionario(req, res);
})

router.post("/verfuncionario", function (req, res) {
    funcionarioController.verfuncionario(req, res);
})

router.post("/excluirfuncionario", function (req, res) {
    funcionarioController.excluirfuncionario(req, res);
})

router.post("/autenticar", function (req, res) {
    funcionarioController.entrar(req, res);
});

module.exports = router;