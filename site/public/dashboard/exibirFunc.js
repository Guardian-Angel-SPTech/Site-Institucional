var vFuncionario = ""
var vFuncionario2 = ""
var aux
var nome
let i
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
        cnpjServer: sessionStorage.CNPJ_EMPRESA
    })
}).then(function (resposta) {

    console.log("resposta: ", resposta);
    if (resposta.ok) {
        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));
            vFuncionario = json
            loadF.addEventListener('load', listaFuncionario())
            var nomet = document.createTextNode(vFuncionario[0].nome);
            Nomefunc= document.getElementById("nomeFunc");
            Nomefunc.appendChild(nomet);
           
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

var divNomeFunc = document.getElementById("funcDash")
function listaFuncionario(){
    console.log(vFuncionario)
    nome = document.createTextNode(vFuncionario[0].nome);
    
    
   LF =  document.getElementById("listaFunc");
    for ( i = 0; i < vFuncionario.length; i++) {

        if(vFuncionario[i].idFuncionario == sessionStorage.ID_FUNCIONARIO){
        } else{
            const element = vFuncionario[i];
            console.log(element)
            const div = document.createElement('button')
            div.className = 'funcionario'
            div.innerHTML = element.nome
            nome = vFuncionario[i].nome
            loadF.appendChild(div)
           
            aux = element.idFuncionario
           
           
            div.setAttribute('Onclick', `voltar(${aux})`);  
         
            if( i > 15){
                LF.style.cssText = `padding-top : calc(${i*2}% + 10% ) ; height: 500px ; overflow-y: scroll;`;
            }
        }
    
    }

    }

function voltar(id){
    window.location.href = `index.html?idFuncionario=${id}`


}
    function funcionarioTecnico(){
        fetch("../funcionarios/verfuncionarioTec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/funcionario.js
                cnpjServer: sessionStorage.CNPJ_EMPRESA,
                cpfServer: sessionStorage.CPF_FUNCIONARIO
            })
        }).then(function (resposta) {
        
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    vFuncionario = json
                    var nomet = document.createTextNode(vFuncionario[0].nome);
                    
                    Nomefunc= document.getElementById("nomeFunc");
                    Nomefunc.appendChild(nomet);
                   
                    
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