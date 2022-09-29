const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/registrarusuario", function (req, res) {
    usuarioController.registrarusuario(req, res);
})

router.post("/listarusuario", function (req, res) {
    usuarioController.listarusuario(req, res);
})

router.post("/excluirusuario", function (req, res) {
    usuarioController.excluirusuario(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;