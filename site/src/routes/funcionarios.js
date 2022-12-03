const express = require("express");
const router = express.Router();

const funcionarioController = require("../controllers/funcionarioController");

router.get("/", function (req, res) {
    funcionarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    funcionarioController.listar(req, res);
});

router.get("/verNomePorId/:idFuncionario", function (req, res) {
    funcionarioController.verNomePorId(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de funcionaricontroller.js
router.post("/cadastrar", function (req, res) {
    funcionarioController.cadastrar(req, res);
})
router.post("/registrarMaquina", function (req, res) {
    funcionarioController.registrarfuncionario(req, res);
})

router.post("/registrarfuncionario", function (req, res) {
    funcionarioController.registrarfuncionario(req, res);
})

router.post("/listarfuncionario", function (req, res) {
    funcionarioController.listarfuncionario(req, res);
})
router.post("/listarMaquina", function (req, res) {
    funcionarioController.listarMaquina(req, res);
})

router.post("/verfuncionario", function (req, res) {
    funcionarioController.verfuncionario(req, res);
})
router.post("/verMaquina", function (req, res) {
    funcionarioController.verMaquina(req, res);
})

router.post("/verfuncionarioTec", function (req, res) {
    funcionarioController.verfuncionarioTec(req, res);
})

router.post("/excluirfuncionario", function (req, res) {
    funcionarioController.excluirfuncionario(req, res);
})

router.post("/autenticar", function (req, res) {
    funcionarioController.entrar(req, res);
});

router.post("/autenticarE", function (req, res) {
    funcionarioController.entrarE(req, res);
});

module.exports = router;