var vFuncionario = ""
const loadF = document.getElementById("listaFunc")
function funcionario(){
fetch("../usuarios/verfuncionario", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        cnpjServer: sessionStorage.CNPJ_EMPRESA,
    })
}).then(function (resposta) {

    console.log("resposta: ", resposta);
    if (resposta.ok) {
        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));
            vFuncionario = json
            loadF.addEventListener('load', listaUsuario())
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
function listaUsuario(){
    var cUl = document.createElement("ul");
for (i = 0; i < vFuncionario.length; i++) {
            var texto = document.createTextNode(vFuncionario[i].nome);
            cUl.classList.add("list-collapse");
            var cLi = document.createElement("li");
            cLi.appendChild(texto);
            cUl.appendChild(cLi);
            document.getElementById("listaFunc").appendChild(cUl);
          }
}