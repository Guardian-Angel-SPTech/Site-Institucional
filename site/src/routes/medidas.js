const express = require("express");
const router = express.Router();

const medidaController = require("../controllers/medidaController");

router.get("/ultimasRAM/:idFuncionario", function (req, res) {
    medidaController.buscarUltimasMedidasRAM(req, res);
});

router.post("/ultimasRAMm", function (req, res) {
    medidaController.buscarUltimasMedidasRAMm(req, res);
});

router.get("/ultimasCPU/:idFuncionario", function (req, res) {
    medidaController.buscarUltimasMedidasCPU(req, res);
});

router.post("/ultimasCPUm", function (req, res) {
    medidaController.buscarUltimasMedidasCPUm(req, res);
});

router.get("/ultimasDisco/:idFuncionario", function (req, res) {
    medidaController.buscarUltimasMedidasDisco(req, res);
});

router.post("/ultimasDiscom", function (req, res) {
    medidaController.buscarUltimasMedidasDiscom(req, res);
});

router.get("/tempo-realRAM/:idFuncionario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRAM(req, res);
})

router.post("/tempo-realRAMm", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRAMm(req, res);
});

router.get("/tempo-realCPU/:idFuncionario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealCPU(req, res);
})

router.post("/tempo-realCPUm", function (req, res) {
    medidaController.buscarMedidasEmTempoRealCPUm(req, res);
});

router.get("/tempo-realDisco/:idFuncionario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealDisco(req, res);
})

router.post("/tempo-realDiscom", function (req, res) {
    medidaController.buscarMedidasEmTempoRealDiscom(req, res);
});

router.get("/pegarProcessos/:idFuncionario", function (req, res) {
    medidaController.pegarProcessos(req, res);
});
router.get("/mediaCPUDiaria/:idFuncionario", function (req, res) {
    medidaController.mediaCPUDiaria(req, res);
});

module.exports = router;