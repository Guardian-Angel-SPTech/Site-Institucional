const express = require("express");
const router = express.Router();

const medidaController = require("../controllers/medidaController");

router.get("/ultimasRAM/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasRAM(req, res);
});
router.get("/ultimasCPU/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasCPU(req, res);
});
router.get("/ultimasDisco/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidasDisco(req, res);
});

router.get("/tempo-realRAM/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRAM(req, res);
})
router.get("/tempo-realCPU/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealCPU(req, res);
})
router.get("/tempo-realDisco/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealDisco(req, res);
})

router.get("/pegarProcessos/:idUsuario", function (req, res) {
    medidaController.pegarProcessos(req, res);
});

module.exports = router;