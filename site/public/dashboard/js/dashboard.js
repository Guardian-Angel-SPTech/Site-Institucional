const processTableId = document.getElementById("process-table")
const processStatus = ['danger', 'moderate', 'controlled']
const process = [1, 2, 3, 4, 5]
chart1()

processTableId.addEventListener('load', tablesInit())
function tablesInit(){

    // Redefinindo tabelas
    processTableId.innerHTML = ` 
        <!-- Tabela das áreas mais instáveis -->
        <article>
            <h2>
                Lista de processos
            </h2>
            <table>
                <tbody id="table1">
                    <tr>
                        <th>Processo</th>
                        <th>Uso (%)</th>
                    </tr>
                </tbody>
            </table>
        </article>
        `

    tables()
}

function tables() {
    // Criando a tabela das máquinas mais estáveis
    const processTable1 = document.getElementById("table1")
    for (let i = 0; i < process.length; i++) {
        let status = parseInt(Math.random() * 3); // Gerando o status aleatóriamente
        processTable1.insertAdjacentHTML("beforeEnd", `
                <tr>
                    <td>Processo ${process[i]}</td>
                    <td>13</td>
                </tr>
        `)
    }
}

// Gráficos
function chart1() {
    const chart = document.getElementById('chart-1').getContext('2d')

    // Dados para testes
    const ram = []
    const label = []
    const limit = parseInt(Math.random() * 4) + 3

    for (let i = 1; i <= limit; i++) {
        ram.push(parseInt(Math.random() * 99) + 1)
        label.push('Ram ' + i)
    }

    const chartConfig = new Chart(chart, {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: 'Ram',
                data: ram,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
        }
    });
}

// Atualizando gráficos em tempo real
let proximaAtualizacao;

function obterDadosGrafico(fkSensor) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimas/${fkSensor}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            console.log("Obtendo dados: Resposta Ok")
            
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                console.log("Indo plotar gráfico")
                plotarGrafico(resposta, fkSensor);
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
function plotarGrafico(resposta, fkSensor) {
    console.log('iniciando plotagem do gráfico...');

    const dados = {
        labels: [],
        datasets: [
            {
                yAxisID: 'y-ram',
                label: 'ram',
                borderColor: '#32B9CD',
                backgroundColor: '#32b9cd8f',
                fill: true,
                data: []
            },
            {
                yAxisID: 'y-temperatura',
                label: 'Temperatura',
                borderColor: '#FFF',
                backgroundColor: '#32b9cd8f',
                fill: true,
                data: []
            }
        ]
    };

    for (i = 0; i < resposta.length; i++) {
        const registro = resposta[i];
        dados.labels.push(registro.horario);
        dados.datasets[0].data.push(registro.ram);
        dados.datasets[1].data.push(registro.temperatura);
    }

    console.log(JSON.stringify(dados));


    const chart = document.getElementById('chart-1').getContext('2d')
    window.grafico_linha = Chart.Line(chart, {
        data: dados,
        options: {
            responsive: true,
            animation: { duration: 500 },
            hoverMode: 'index',
            stacked: false,
            title: {
                display: false,
                text: 'Dados capturados'
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-temperatura',
                    ticks: {
                        beginAtZero: true,
                        max: 50,
                        min: 0
                    }
                }, {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    id: 'y-ram',
                    ticks: {
                        beginAtZero: true,
                        max: 50,
                        min: 0
                    },

                    gridLines: {
                        drawOnChartprocess: false,
                    },
                }],
            }
        }
    });
    console.log("Plotando gráfico =)")

    setTimeout(() => atualizarGrafico(fkSensor, dados), 2000);
}


// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas, 

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function atualizarGrafico(fkSensor, dados) {
    // console.log("Indo atualizar gráfico")

    fetch(`/medidas/tempo-real/${fkSensor}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {

                console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                console.log(`Dados atuais do gráfico: ${dados}`);

                // tirando e colocando valores no gráfico
                dados.labels.shift(); // apagar o primeiro
                dados.labels.push(novoRegistro[0].horario); // incluir um novo momento

                dados.datasets[0].data.shift();  // apagar o primeiro de ram
                dados.datasets[0].data.push(novoRegistro[0].ram); // incluir uma nova medida de ram

                dados.datasets[1].data.shift();  // apagar o primeiro de temperatura
                dados.datasets[1].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de temperatura

                window.grafico_linha.update();

                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGrafico(fkSensor, dados), 5000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            proximaAtualizacao = setTimeout(() => atualizarGrafico(fkSensor, dados), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}