var vFuncionario = ""
const loadF = document.getElementById("listaFunc")
function funcionario(){
fetch("../funcionarios/verfuncionario", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/funcionario.js
        cnpjServer: sessionStorage.CNPJ_EMPRESA,
    })
}).then(function (resposta) {

    console.log("resposta: ", resposta);
    if (resposta.ok) {
        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));
            vFuncionario = json
            
            loadF.addEventListener('load', listaFuncionario())
          });
    } else {
        throw ("Houve um erro ao tentar realizar consulta!");
    }
}).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    alert("Houve um erro ao tentar realizar consulta!")
});
return false;
}
function listaFuncionario(){
    var cUl = document.createElement("ul");
    var nome = document.createTextNode(vFuncionario[0].nome);
    Nomefunc= document.getElementById("nomeFunc");
for (i = 0; i < vFuncionario.length; i++) {

            var texto = document.createTextNode(vFuncionario[i].nome);
            cUl.classList.add("list-collapse");
            var cLi = document.createElement("li");
            cLi.setAttribute('Onclick', `obterDadosGraficoRAM(${vFuncionario[i].idFuncionario}), obterDadosGraficoCPU(${vFuncionario[i].idFuncionario}), obterDadosGraficoDisco(${vFuncionario[i].idFuncionario})`);
            
            Nomefunc.appendChild(nome)
            cLi.appendChild(texto);
            cUl.appendChild(cLi);
            document.getElementById("listaFunc").appendChild(cUl);
          }
}