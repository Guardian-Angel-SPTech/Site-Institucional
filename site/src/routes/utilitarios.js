const express = require("express");
const router = express.Router();

const   utilitariosController = require("../controllers/utlitariosController");

router.get("/gerarpdf", function (req, res) {
    utilitariosController.gerarpdf(req, res);
});

module.exports = router;