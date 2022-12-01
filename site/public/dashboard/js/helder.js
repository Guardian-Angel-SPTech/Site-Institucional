// !Atenção! Se você não for o "Helder" não altere esse arquivo
// Atualizando gráficos em tempo real
let proximaAtualizacao;

window.onload = obterDadosGrafico(1);

function obterDadosGrafico(idFuncionario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/bateria/`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/funcionario.js
                funcionarioServer: sessionStorage.ID_FUNCIONARIO
            })
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

function obterDadosBateria(idFuncionario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimasCPU/`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/funcionario.js
                funcionarioServer: sessionStorage.ID_FUNCIONARIO
            })
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

function obterDadosGraficoDiscos(idFuncionario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimasDisco/`, {
            cache: 'no-store',
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/funcionario.js
                funcionarioServer: sessionStorage.ID_FUNCIONARIO
            })
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
    setTimeout(() => atualizarBateria(idFuncionario, myChart, dados1), 2000);
}

// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas, 

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function atualizarBateria(idFuncionario, myChart, dados1) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/atualizarBateria/`, {
            cache: 'no-store',
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/funcionario.js
                funcionarioServer: sessionStorage.ID_FUNCIONARIO
            })
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


                    myChart.update();

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                    proximaAtualizacao = setTimeout(() => atualizarBateria(idFuncionario, myChart, dados1), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarBateria(idFuncionario, myChart, dados1), 2000);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}