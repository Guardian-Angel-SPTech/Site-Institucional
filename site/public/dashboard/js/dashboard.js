chart()


// Gráficos
function chart() {

}

// Atualizando gráficos em tempo real
let proximaAtualizacao;

function obterDadosGraficoRAM(idFuncionario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimasRAM/${idFuncionario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                console.log("Obtendo dados: Resposta Ok")

                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    console.log("Indo plotar gráfico")
                    plotarGraficoRAM(resposta, idFuncionario);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function obterDadosGraficoSwap(idFuncionario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimasSwap/${idFuncionario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                console.log("Obtendo dados: Resposta Ok")

                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    console.log("Indo plotar gráfico")
                    plotarGraficoSwap(resposta, idFuncionario);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function obterDadosGraficoCPU(idFuncionario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimasCPU/${idFuncionario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                console.log("Obtendo dados: Resposta Ok")

                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    console.log("Indo plotar gráfico")
                    plotarGraficoCPU(resposta, idFuncionario);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function obterDadosGraficoDisco(idFuncionario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimasDisco/${idFuncionario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                console.log("Obtendo dados: Resposta Ok")

                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    console.log("Indo plotar gráfico")
                    plotarGraficoDisco(resposta, idFuncionario);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function obterDadosMediaCPU(idMaquina) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/mediaCPUDiaria/${idMaquina}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                console.log("Obtendo dados: Resposta Ok")

                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    console.log("Indo plotar gráfico")
                    plotarGraficoMediaCPU(resposta, idMaquina);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function obterDadosMediaRAM(idMaquina) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/mediaRAMDiaria/${idMaquina}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                console.log("Obtendo dados: Resposta Ok")

                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    console.log("Indo plotar gráfico")
                    plotarGraficoMediaRAM(resposta, idMaquina);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function obterDadosMediaDisco(idMaquina) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/mediaDiscoDiaria/${idMaquina}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                console.log("Obtendo dados: Resposta Ok")

                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    console.log("Indo plotar gráfico")
                    plotarGraficoMediaDisco(resposta, idMaquina);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGraficoRAM(resposta, idFuncionario) {
    
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Ram',
            data: [],
            borderColor: 'rgb(238, 81, 81)',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        
        var horario = registro.horaRegistro;
        dados1.datasets[0].data.push(registro.registroComponente);
        
        labels1.push(horario);
        dados1.datas
    }

    const config = {
        type: 'line',
        data: dados1,
    };
    var ctx = document.getElementById("chart1").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoRAM(idFuncionario, myChart, dados1), 2000);
}

function plotarGraficoSwap(resposta, idFuncionario) {
    
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Swap',
            data: [],
            borderColor: '#ffd000',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        
        var horario = registro.horaRegistro;
        dados1.datasets[0].data.push(registro.registroComponente);
        
        labels1.push(horario);
        dados1.datas
    }

    const config = {
        type: 'line',
        data: dados1,
    };
    var ctx = document.getElementById("chart4").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoSwap(idFuncionario, myChart, dados1), 2000);
}

function plotarGraficoCPU(resposta, idFuncionario) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'CPU',
            data: [],
            borderColor: '#38cd4b',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horaRegistro;
        dados1.datasets[0].data.push(registro.registroComponente);
        labels1.push(horario);
        dados1.datas
    }

    const config = {
        type: 'line',
        data: dados1,
    };
    var ctx = document.getElementById("chart2").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoCPU(idFuncionario, myChart, dados1), 2000);
}

function plotarGraficoDisco(resposta, idFuncionario) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Disco',
            data: [],
            borderColor: '#0086d3',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horaRegistro;
        dados1.datasets[0].data.push(registro.registroComponente);
        labels1.push(horario);
        dados1.datas
    }

    const config = {
        type: 'line',
        data: dados1,
    };
    var ctx = document.getElementById("chart3").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoDisco(idFuncionario, myChart, dados1), 2000);
}

function plotarGraficoMediaRAM(resposta, idMaquina) {
    
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Media RAM',
            data: [],
            borderColor: 'rgb(238, 81, 81)',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        
        var horario = registro.dataRegistro;
        dados1.datasets[0].data.push(registro.registroComponente);
        
        labels1.push(horario);
        dados1.datas
    }

    const config = {
        type: 'line',
        data: dados1,
    };
    var ctx = document.getElementById("chart1").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarMediaRAM(idMaquina, myChart, dados1), 2000);
}

function plotarGraficoMediaCPU(resposta, idMaquina) {
    
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Media CPU',
            data: [],
            borderColor: '#38cd4b',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        
        var horario = registro.dataRegistro;
        dados1.datasets[0].data.push(registro.registroComponente);
        
        labels1.push(horario);
        dados1.datas
    }

    const config = {
        type: 'line',
        data: dados1,
    };
    var ctx = document.getElementById("chart2").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarMediaCPU(idMaquina, myChart, dados1), 2000);
}


function plotarGraficoMediaDisco(resposta, idMaquina) {
    
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Media Disco',
            data: [],
            borderColor: '#0086d3',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        
        var horario = registro.dataRegistro;
        dados1.datasets[0].data.push(registro.registroComponente);
        
        labels1.push(horario);
        dados1.datas
    }

    const config = {
        type: 'line',
        data: dados1,
    };
    var ctx = document.getElementById("chart3").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarMediaDisco(idMaquina, myChart, dados1), 2000);
}

function plotarGraficoUpload(resposta, idFuncionario) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Upload',
            data: [],
            borderColor: '#0086d3',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horaRegistro;
        dados1.datasets[0].data.push(registro.registroComponente);
        labels1.push(horario);
        dados1.datas
    }

    const config = {
        type: 'line',
        data: dados1,
    };
    var ctx = document.getElementById("chart6").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoUpload(idFuncionario, myChart, dados1), 2000);
}


function plotarGraficoDownload(resposta, idFuncionario) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Download',
            data: [],
            borderColor: '#0086d3',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horaRegistro;
        dados1.datasets[0].data.push(registro.registroComponente);
        labels1.push(horario);
        dados1.datas
    }

    const config = {
        type: 'line',
        data: dados1,
    };
    var ctx = document.getElementById("chart7").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoDownload(idFuncionario, myChart, dados1), 2000);
}

// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas, 

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function atualizarGraficoRAM(idFuncionario, myChart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/tempo-realRAM/${idFuncionario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {

                response.json().then(function (novoRegistro) {


                    console.log(`Dados recebidos: ${JSON.stringify(novoRegistro.horaRegistro)}`);
                    console.log(`Dados atuais do gráfico: ${dados1}`);

                    // tirando e colocando valores no gráfico
                    dados1.labels.shift(); // apagar o primeiro
                    dados1.labels.push(novoRegistro[0].horaRegistro); // incluir um novo momento

                    dados1.datasets[0].data.shift(); // apagar o primeiro de ram
                    dados1.datasets[0].data.push(novoRegistro[0].registroComponente); // incluir uma nova medida de ram


                    myChart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarGraficoRAM(idFuncionario, myChart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGraficoRAM(idFuncionario, myChart, dados1), 2000);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function atualizarGraficoSwap(idFuncionario, myChart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/tempo-realSwap/${idFuncionario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {

                response.json().then(function (novoRegistro) {


                    console.log(`Dados recebidos: ${JSON.stringify(novoRegistro.horaRegistro)}`);
                    console.log(`Dados atuais do gráfico: ${dados1}`);

                    // tirando e colocando valores no gráfico
                    dados1.labels.shift(); // apagar o primeiro
                    dados1.labels.push(novoRegistro[0].horaRegistro); // incluir um novo momento

                    dados1.datasets[0].data.shift(); // apagar o primeiro de ram
                    dados1.datasets[0].data.push(novoRegistro[0].registroComponente); // incluir uma nova medida de ram


                    myChart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarGraficoSwap(idFuncionario, myChart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGraficoSwap(idFuncionario, myChart, dados1), 2000);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function atualizarGraficoCPU(idFuncionario, mychart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/tempo-realCPU/${idFuncionario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (novoRegistro) {

                    console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                    console.log(`Dados atuais do gráfico: ${dados1}`);

                    // tirando e colocando valores no gráfico
                    dados1.labels.shift(); // apagar o primeiro
                    dados1.labels.push(novoRegistro[0].horaRegistro); // incluir um novo momento

                    dados1.datasets[0].data.shift(); // apagar o primeiro de ram
                    dados1.datasets[0].data.push(novoRegistro[0].registroComponente); // incluir uma nova medida de ram


                    mychart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarGraficoCPU(idFuncionario, mychart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGraficoCPU(idFuncionario, mychart, dados1), 2000);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function atualizarGraficoDisco(idFuncionario, mychart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/tempo-realDisco/${idFuncionario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (novoRegistro) {

                    console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                    console.log(`Dados atuais do gráfico: ${dados1}`);

                    // tirando e colocando valores no gráfico
                    dados1.labels.shift(); // apagar o primeiro
                    dados1.labels.push(novoRegistro[0].horaRegistro); // incluir um novo momento

                    dados1.datasets[0].data.shift(); // apagar o primeiro de ram
                    dados1.datasets[0].data.push(novoRegistro[0].registroComponente); // incluir uma nova medida de ram


                    mychart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarGraficoDisco(idFuncionario, mychart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGraficoDisco(idFuncionario, mychart, dados1), 2000);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}



function atualizarMediaRAM(idMaquina, myChart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/mediaRAMDiariaTempoReal/${idMaquina}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {

                response.json().then(function (novoRegistro) {


                    console.log(`Dados recebidos: ${JSON.stringify(novoRegistro.dataRegistro)}`);
                    console.log(`Dados atuais do gráfico: ${dados1}`);

                    // tirando e colocando valores no gráfico
                    dados1.labels.shift(); // apagar o primeiro
                    dados1.labels.push(novoRegistro[0].dataRegistro); // incluir um novo momento

                    dados1.datasets[0].data.shift(); // apagar o primeiro de ram
                    dados1.datasets[0].data.push(novoRegistro[0].registroComponente); // incluir uma nova medida de ram


                    myChart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarMediaRAM(idMaquina, myChart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function atualizarMediaCPU(idMaquina, myChart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/mediaCPUDiariaTempoReal/${idMaquina}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {

                response.json().then(function (novoRegistro) {


                    console.log(`Dados recebidos: ${JSON.stringify(novoRegistro.dataRegistro)}`);
                    console.log(`Dados atuais do gráfico: ${dados1}`);

                    // tirando e colocando valores no gráfico
                    dados1.labels.shift(); // apagar o primeiro
                    dados1.labels.push(novoRegistro[0].dataRegistro); // incluir um novo momento

                    dados1.datasets[0].data.shift(); // apagar o primeiro de ram
                    dados1.datasets[0].data.push(novoRegistro[0].registroComponente); // incluir uma nova medida de ram


                    myChart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarMediaCPU(idMaquina, myChart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function atualizarMediaDisco(idMaquina, myChart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/mediaDiscoDiariaTempoReal/${idMaquina}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {

                response.json().then(function (novoRegistro) {


                    console.log(`Dados recebidos: ${JSON.stringify(novoRegistro.dataRegistro)}`);
                    console.log(`Dados atuais do gráfico: ${dados1}`);

                    // tirando e colocando valores no gráfico
                    dados1.labels.shift(); // apagar o primeiro
                    dados1.labels.push(novoRegistro[0].dataRegistro); // incluir um novo momento

                    dados1.datasets[0].data.shift(); // apagar o primeiro de ram
                    dados1.datasets[0].data.push(novoRegistro[0].registroComponente); // incluir uma nova medida de ram


                    myChart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarMediaDisco(idMaquina, myChart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function pegarUpload(idFuncionario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/pegarUpload/${idFuncionario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                console.log("Obtendo dados: Resposta Ok")

                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    console.log("Indo plotar gráfico")
                    plotarGraficoUpload(resposta, idFuncionario);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function atualizarGraficoUpload(idFuncionario, mychart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/pegarUpload/${idFuncionario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (novoRegistro) {

                    console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                    console.log(`Dados atuais do gráfico: ${dados1}`);

                    // tirando e colocando valores no gráfico
                    dados1.labels.shift(); // apagar o primeiro
                    dados1.labels.push(novoRegistro[0].horaRegistro); // incluir um novo momento

                    dados1.datasets[0].data.shift(); // apagar o primeiro de ram
                    dados1.datasets[0].data.push(novoRegistro[0].registroComponente); // incluir uma nova medida de ram


                    mychart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarGraficoUpload(idFuncionario, mychart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGraficoUpload(idFuncionario, mychart, dados1), 2000);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


function pegarDownload(idFuncionario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/pegarDownload/${idFuncionario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                console.log("Obtendo dados: Resposta Ok")

                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    console.log("Indo plotar gráfico")
                    plotarGraficoDownload(resposta, idFuncionario);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function atualizarGraficoDownload(idFuncionario, mychart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/pegarDownload/${idFuncionario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (novoRegistro) {

                    console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                    console.log(`Dados atuais do gráfico: ${dados1}`);

                    // tirando e colocando valores no gráfico
                    dados1.labels.shift(); // apagar o primeiro
                    dados1.labels.push(novoRegistro[0].horaRegistro); // incluir um novo momento

                    dados1.datasets[0].data.shift(); // apagar o primeiro de ram
                    dados1.datasets[0].data.push(novoRegistro[0].registroComponente); // incluir uma nova medida de ram


                    mychart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarGraficoDownload(idFuncionario, mychart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGraficoDownload(idFuncionario, mychart, dados1), 2000);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}