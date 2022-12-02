const express = require("express");
const router = express.Router();

const medidaController = require("../controllers/medidaController");

router.get("/buscarBateria/:idFuncionario", function (req, res) {
    medidaController.buscarBateria(req, res);
});

router.get("/buscarBateriaMesAnterior/:idFuncionario", function (req, res) {
    medidaController.buscarBateriaMesAnterior(req, res);
});

router.get("/ultimasRAM/:idFuncionario", function (req, res) {
    medidaController.buscarUltimasMedidasRAM(req, res);
});

router.get("/ultimasSwap/:idFuncionario", function (req, res) {
    medidaController.buscarUltimasMedidasSwap(req, res);
});

router.post("/ultimasSwapm", function (req, res) {
    medidaController.buscarUltimasMedidasSwapm(req, res);
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

router.post("/ultimasDisco/:idFuncionario", function (req, res) {
    medidaController.buscarUltimasMedidasDisco(req, res);
});

router.post("/ultimasDiscom", function (req, res) {
    medidaController.buscarUltimasMedidasDiscom(req, res);
});

router.post("/atualizarBateria/:idFuncionario", function (req, res) {
    medidaController.atualizarBateria(req, res);
});

router.get("/tempo-realRAM/:idFuncionario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRAM(req, res);
})

router.get("/tempo-realSwap/:idFuncionario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealSwap(req, res);
})

router.post("/tempo-realRAMm", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRAMm(req, res);
});

router.post("/tempo-realSwapm", function (req, res) {
    medidaController.buscarMedidasEmTempoRealSwapm(req, res);
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

// INDIVIDUAL DO MIGUEL - NÃO MEXA SEU PUTO/A

router.get("/pegarUpload/:idFuncionario", function (req, res) {
    medidaController.pegarUpload(req, res);
});

router.get("/pegarUploadTempoReal/:idFuncionario", function (req, res) {
    medidaController.pegarUploadTempoReal(req, res);
});


router.get("/pegarDownload/:idFuncionario", function (req, res) {
    medidaController.pegarDownload(req, res);
});

router.get("/pegarDownloadTempoReal/:idFuncionario", function (req, res) {
    medidaController.pegarDownloadTempoReal(req, res);
});



module.exports = router;