// !Atenção! Se você não for o "Helder" não altere esse arquivo

// Atualizando gráficos em tempo real
let proximaAtualizacao;

window.onload = obterDadosBateria(1);

// Grafico 1 - Ultimos consumos
function obterDadosBateria(idFuncionario) {

    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/bateria/${idFuncionario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGraficoBateria(resposta, idFuncionario);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGraficoBateria(resposta, idFuncionario) {
    let labels1 = [];
    let dados1 = {
        labels: labels1,
        datasets: [{
            label: 'Bateria',
            data: [],
            borderColor: '#03640b',
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
    setTimeout(() => atualizarGraficoBateria(idFuncionario, myChart, dados1), 2000);
}

function atualizarGraficoBateria(idFuncionario, dados) {

    fetch(`/medidas/atualizarBateria/${idFuncionario}`, {
        cache: 'no-store'
    }).then(function (response) {
        if (response.ok) {

            response.json().then(function (novoRegistro) {

                console.log(`Dados recebidos: ${JSON.stringify(novoRegistro.horaRegistro)}`);
                console.log(`Dados atuais do gráfico: ${dados1}`);

                // tirando e colocando valores no gráfico
                dados1.labels.shift(); // apagar o primeiro
                dados1.labels.push(novoRegistro[0].horaRegistro); // incluir um novo momento

                dados1.datasets[0].data.shift(); // apagar o primeiro de Bateria
                dados1.datasets[0].data.push(novoRegistro[0].registroComponente); // incluir uma nova medida de Bateria


                myChart.update();

                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGraficoBateria(idFuncionario, myChart, dados1), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            proximaAtualizacao = setTimeout(() => atualizarGraficoBateria(idFuncionario, myChart, dados1), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}

//