// const processTableId = document.getElementById("process-table")
// const processStatus = ['danger', 'moderate', 'controlled']
 chart()

// processTableId.addEventListener('load', tables())

// function tables() {
//     // Preenchendo a tabela com os processos

//     const process = [];
//     const uso = [];

//     fetch("../medidas/PegarProcessos", {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(function (resposta) {
//         if (resposta.ok) {
//             resposta.json().then(json => {
//                 console.log(json)
//                 json.forEach(element => {
//                     process.push(element.processo)
//                     uso.push(element.uso)
//                     for (let i = 0; i < 9; i++) {
//                         if (process[i] != undefined) {
//                             processTable1.insertAdjacentHTML("beforeEnd", `
//                                     <tr>
//                                         <td>${json[i]["processo"]}</td>
//                                         <td>${json[i]["uso"]} %</td>
//                                     </tr>
//                             `)
//                         }
//                     }
//                 });
//             })
//         }
//     })

//     const processTable1 = document.getElementById("table1")

// }

// Gráficos
function chart() {
    
}

// Atualizando gráficos em tempo real
let proximaAtualizacao;

function obterDadosGraficoRAM(idUsuario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimasRAM/${idUsuario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                console.log("Obtendo dados: Resposta Ok")

                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    console.log("Indo plotar gráfico")
                    plotarGraficoRAM(resposta, idUsuario);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}
function obterDadosGraficoCPU(idUsuario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimasCPU/${idUsuario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                console.log("Obtendo dados: Resposta Ok")

                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    console.log("Indo plotar gráfico")
                    plotarGraficoCPU(resposta, idUsuario);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}
function obterDadosGraficoDisco(idUsuario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimasDisco/${idUsuario}`, {
            cache: 'no-store'
        }).then(function (response) {
            if (response.ok) {
                console.log("Obtendo dados: Resposta Ok")

                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    console.log("Indo plotar gráfico")
                    plotarGraficoDisco(resposta, idUsuario);
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
function plotarGraficoRAM(resposta, idUsuario) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Ram',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horaRegistro;
        dados1.datasets[0].data.push(registro.RegistroComponente);     
        labels1.push(horario);
        dados1.datas
    }

    const config = { type: 'line', data: dados1, };
    var ctx = document.getElementById("chart1").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoRAM(idUsuario,myChart,dados1), 2000);
}

function plotarGraficoCPU(resposta, idUsuario) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Ram',
            data: [],
            borderColor: '#000',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horaRegistro;
        dados1.datasets[0].data.push(registro.RegistroComponente);     
        labels1.push(horario);
        dados1.datas
    }

    const config = { type: 'line', data: dados1, };
    var ctx = document.getElementById("chart2").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoCPU(idUsuario,myChart,dados1), 2000);
}

function plotarGraficoDisco(resposta, idUsuario) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Disco',
            data: [],
            borderColor: '#656565',
            tension: 0.1
        }],
    };
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        var horario = registro.horaRegistro;
        dados1.datasets[0].data.push(registro.RegistroComponente);     
        labels1.push(horario);
        dados1.datas
    }

    const config = { type: 'line', data: dados1, };
    var ctx = document.getElementById("chart3").getContext("2d");
    let myChart = new Chart(ctx, config);
    setTimeout(() => atualizarGraficoDisco(idUsuario,myChart,dados1), 2000);
}

// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas, 

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function atualizarGraficoRAM(idUsuario,myChart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/tempo-realRAM/${idUsuario}`, {
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
                    dados1.datasets[0].data.push(novoRegistro[0].RegistroComponente); // incluir uma nova medida de ram


                    myChart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarGraficoRAM(idUsuario,myChart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGraficoRAM(idUsuario,myChart, dados1), 2000);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function atualizarGraficoCPU(idUsuario,mychart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/tempo-realCPU/${idUsuario}`, {
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
                    dados1.datasets[0].data.push(novoRegistro[0].RegistroComponente); // incluir uma nova medida de ram


                    mychart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarGraficoCPU(idUsuario,mychart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGraficoCPU(idUsuario,mychart, dados1), 2000);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function atualizarGraficoDisco(idUsuario,mychart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/tempo-realDisco/${idUsuario}`, {
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
                    dados1.datasets[0].data.push(novoRegistro[0].RegistroComponente); // incluir uma nova medida de ram


                    mychart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarGraficoDisco(idUsuario,mychart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGraficoDisco(idUsuario,mychart, dados1), 2000);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}