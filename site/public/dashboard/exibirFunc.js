var vFuncionario = ""
const loadF = document.getElementById("listaFunc")
function funcionario(){
fetch("../usuarios/verfuncionario", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
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
for (i = 0; i < vFuncionario.length; i++) {
            var texto = document.createTextNode(vFuncionario[i].nome);
            var cUl = document.createElement("ul");
            cUl.classList.add("list-collapse");
            var cLi = document.createElement("li");
            cLi.appendChild(texto);
            cUl.appendChild(cLi);
            document.getElementById("listaFunc").appendChild(cUl);
          }
}