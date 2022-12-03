var vMaquina = ""
const loadF = document.getElementById("listaFunc")
function maquina(){
fetch("../funcionarios/verMaquina", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/funcionario.js
        cnpjServer: sessionStorage.CNPJ_EMPRESA
    })
}).then(function (resposta) {

    console.log("resposta: ", resposta);
    if (resposta.ok) {
        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));
            vMaquina = json
            loadF.addEventListener('load', listaMaquina())
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
function listaMaquina(){
    console.log(vMaquina)
    var nome = document.createTextNode(vMaquina[0].sistOp);
 
   LF =  document.getElementById("listaFunc");
    for (let i = 0; i < vMaquina.length; i++) {

            const element = vMaquina[i];
            console.log(element)
            const div = document.createElement('button')
           
            div.className = 'Maquina'
            div.innerHTML = element.sistOp
            div.className = 'funcionario'
            loadF.appendChild(div)
            var aux = element.idMaquina

            div.setAttribute('Onclick', `voltar(${aux})`);  

            if( i > 15){
                div.style.marginTop = "20px"
            }
        }
    }

function voltar(idMaquina){
    sessionStorage.setItem("ID_MAQUINA", idMaquina)
    window.location.href = `relatorios.html?idMaquina=${idMaquina}`
}