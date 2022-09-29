const express = require("express");
const router = express.Router();

const medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idSensor", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idSensor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;