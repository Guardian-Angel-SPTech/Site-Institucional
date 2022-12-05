const medidaModel = require("../models/medidaModel");

function buscarBateria(req, res) {
    const idFuncionario = req.params.idFuncionario;

    medidaModel.buscarBateria(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar bateria.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarBateriaMesAnterior(req, res) {
    const idFuncionario = req.params.idFuncionario;

    medidaModel.buscarBateriaMesAnterior(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar bateria.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasRAM(req, res) {


    const idFuncionario = req.params.idFuncionario;


    medidaModel.buscarUltimasMedidasRAM(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasSwap(req, res) {


    const idFuncionario = req.params.idFuncionario;


    medidaModel.buscarUltimasMedidasSwap(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasRAMm(req, res) {


    const idFuncionario = req.body.funcionarioServer;


    medidaModel.buscarUltimasMedidasRAM(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasBrasil(req, res) {


    const idFuncionario = req.body.funcionarioServer;


    medidaModel.buscarUltimasMedidasBrasil(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasSwapm(req, res) {


    const idFuncionario = req.body.funcionarioServer;


    medidaModel.buscarUltimasMedidasSwap(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasCPU(req, res) {


    const idFuncionario = req.params.idFuncionario;


    medidaModel.buscarUltimasMedidasCPU(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasCPUm(req, res) {


    const idFuncionario = req.body.funcionarioServer;


    medidaModel.buscarUltimasMedidasCPU(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasDisco(req, res) {


    const idFuncionario = req.params.idFuncionario;


    medidaModel.buscarUltimasMedidasDisco(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasDiscom(req, res) {


    const idFuncionario = req.body.funcionarioServer;


    medidaModel.buscarUltimasMedidasDisco(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function atualizarBateria(req, res) {

    const idFuncionario = req.params.idFuncionario;

    medidaModel.atualizarBateria(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar bateria.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function atualizarBateriaMesAnterior(req, res) {

    const idFuncionario = req.params.idFuncionario;

    medidaModel.atualizarBateria(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar bateria.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoRealRAM(req, res) {

    const idFuncionario = req.params.idFuncionario;
  
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealRAM(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealSwap(req, res) {

    const idFuncionario = req.params.idFuncionario;
  
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealSwap(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealRAMm(req, res) {

    const idFuncionario = req.body.funcionarioServer;
  
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealRAM(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealSwapm(req, res) {

    const idFuncionario = req.body.funcionarioServer;
  
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealSwap(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealCPU(req, res) {

    const idFuncionario = req.params.idFuncionario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealCPU(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealCPUm(req, res) {

    const idFuncionario = req.body.funcionarioServer;
  
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealCPU(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealDisco(req, res) {

    const idFuncionario = req.params.idFuncionario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealDisco(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealDiscom(req, res) {

    const idFuncionario = req.body.funcionarioServer;
  
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealDisco(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarProcessos(req, res) {

    const idFuncionario = req.params.idFuncionario;

    medidaModel.pegarProcessos(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function mediaCPUDiaria(req, res) {

    const idMaquina = req.params.idMaquina;

    medidaModel.mediaCPUDiaria(idMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarCPUDiariatempoReal(req, res) {

    const idMaquina = req.body.funcionarioServer;
  
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarCPUDiariatempoReal(idMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function mediaRAMDiaria(req, res) {

    const idMaquina = req.params.idMaquina;

    medidaModel.mediaRAMDiaria(idMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarRAMDiariatempoReal(req, res) {

    const idMaquina = req.body.funcionarioServer;
  
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarRAMDiariatempoReal(idMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function mediaDiscoDiaria(req, res) {

    const idMaquina = req.params.idMaquina;

    medidaModel.mediaDiscoDiaria(idMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarDiscoDiariatempoReal(req, res) {

    const idMaquina = req.body.funcionarioServer;
  
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarDiscoDiariatempoReal(idMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



// INDIVIDUAL MIGUEL

function pegarUpload(req, res) {
    const idFuncionario = req.params.idFuncionario;

    medidaModel.pegarUpload(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarUploadTempoReal(req, res) {
    const idFuncionario = req.body.funcionarioServer;
  
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.pegarUploadTempoReal(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarMediaUpload(req, res) {
    const idFuncionario = req.params.idFuncionario;

    medidaModel.pegarMediaUpload(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function pegarDownload(req, res) {
    const idFuncionario = req.params.idFuncionario;

    medidaModel.pegarDownload(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarDownloadTempoReal(req, res) {
    const idFuncionario = req.body.funcionarioServer;
  
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.pegarDownloadTempoReal(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarMediaDownload(req, res) {
    const idFuncionario = req.params.idFuncionario;
  
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.pegarMediaDownload(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarBateria,
    buscarBateriaMesAnterior,
    buscarUltimasMedidasRAM,
    buscarUltimasMedidasBrasil,
    buscarUltimasMedidasSwap,
    buscarUltimasMedidasCPU,
    buscarUltimasMedidasDisco,
    buscarMedidasEmTempoRealRAM,
    buscarMedidasEmTempoRealSwap,
    buscarMedidasEmTempoRealCPU,
    buscarMedidasEmTempoRealDisco,
    pegarProcessos,
    buscarUltimasMedidasRAMm,
    buscarUltimasMedidasSwapm,
    buscarUltimasMedidasCPUm,
    buscarUltimasMedidasDiscom,
    atualizarBateria,
    atualizarBateriaMesAnterior,
    buscarMedidasEmTempoRealRAMm,
    buscarMedidasEmTempoRealSwapm,
    buscarMedidasEmTempoRealCPUm,
    buscarMedidasEmTempoRealDiscom,

    mediaCPUDiaria,
    buscarCPUDiariatempoReal,
    mediaRAMDiaria,
    buscarRAMDiariatempoReal,
    mediaDiscoDiaria,
    buscarDiscoDiariatempoReal,
    
    
    pegarDownload,
    pegarUpload,
    pegarDownloadTempoReal,
    pegarUploadTempoReal,
    pegarMediaDownload,
    pegarMediaUpload
}