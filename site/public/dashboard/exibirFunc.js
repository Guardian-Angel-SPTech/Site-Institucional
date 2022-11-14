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
    console.log(vFuncionario)
    var nome = document.createTextNode(vFuncionario[0].nome);
    Nomefunc= document.getElementById("nomeFunc");
  
    for (let i = 0; i < vFuncionario.length; i++) {
        const element = vFuncionario[i];
        console.log(element)
        const div = document.createElement('button')
        div.className = 'funcionario'
        div.innerHTML = element.nome
        loadF.appendChild(div)
        var aux = element.idFuncionario
        div.setAttribute('Onclick', `voltar(${aux})`);
        
        
        Nomefunc.appendChild(nome)  
    }

    }

    function voltar(id) {
        window.location = `index.html?idFuncionario=${id}` ;
    }
    
    function funcionarioTecnico(){
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
                    
                    listaTecnico()
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

    function listaTecnico(){
    var nomet = document.createTextNode(vFuncionario[0].nome);
    Nomefunc= document.getElementById("nomeFunc");
    Nomefunc.appendChild(nomet);
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