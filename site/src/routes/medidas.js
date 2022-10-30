const express = require("express");
const router = express.Router();

const medidaController = require("../controllers/medidaController");

router.get("/ultimasRAM/:idFuncionario", function (req, res) {
    medidaController.buscarUltimasMedidasRAM(req, res);
});
router.get("/ultimasCPU/:idFuncionario", function (req, res) {
    medidaController.buscarUltimasMedidasCPU(req, res);
});
router.get("/ultimasDisco/:idFuncionario", function (req, res) {
    medidaController.buscarUltimasMedidasDisco(req, res);
});

router.get("/tempo-realRAM/:idFuncionario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRAM(req, res);
})
router.get("/tempo-realCPU/:idFuncionario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealCPU(req, res);
})
router.get("/tempo-realDisco/:idFuncionario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealDisco(req, res);
})

router.get("/pegarProcessos/:idFuncionario", function (req, res) {
    medidaController.pegarProcessos(req, res);
});

module.exports = router;