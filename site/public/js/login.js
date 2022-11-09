const btn = document.getElementById('btn_login')
btn.addEventListener("click", login)
function login() {
    const inpLogin = document.getElementById('inp_login').value.replace(/[^\d]+/g, '');
    const parsed = Number.parseInt(inpLogin);
    if (Number.isNaN(parsed)) {
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
        const email = document.getElementById('inp_login').value

        // Validando email se os caracteres do email é válido
        if (email == '') {
            alert('Email vazio')
            return false
        }
        
            if (regex.test(email)) {
            //
                const senha = document.getElementById('inp_senha').value
                    console.log("FORM LOGIN: ", email);
                    console.log("FORM SENHA: ", senha);
            
                    fetch("/funcionarios/autenticarE", {
                        method: "POST",
                        headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        emailServer: email,
                        senhaServer: senha
                    })
                    }).then(function (resposta) {
                        console.log("ESTOU NO THEN DO login()!")
            
                    if (resposta.ok) {
                        console.log(resposta);
            
                        resposta.json().then(json => {
                        console.log(json[0]);
                        console.log(JSON.stringify(json[0]));
            
                        sessionStorage.ID_FUNCIONARIO = json.idFuncionario;
                        sessionStorage.CPF_FUNCIONARIO = json.cpf;
                        sessionStorage.NOME_FUNCIONARIO = json.nome;
                        sessionStorage.ACESSO_FUNCIONARIO = json.acesso;
            
                        sessionStorage.ID_EMPRESA = json.idEmpresa;
                        sessionStorage.NOME_EMPRESA = json.nomeEmpresa;
                        sessionStorage.CNPJ_EMPRESA = json.cnpj;
            
                        setTimeout(() => {
                            window.location = "dashboard/index.html";
                        }, 1000);
                    });
                    return true;
                } else {
                    console.log("Houve um erro ao tentar realizar o login!");
                    alert("E-mail ou senha inválidos")
            
                    resposta.text().then(texto => {
                        console.error(texto);
                    });
                }
            
                }).catch(function (erro) {
                    console.log(erro);
                    alert("Erro ao realizar o login")
                })
            
                return false;  
            //
            } else {
                alert('Email inválido')
                return false
            }
    } else{
        
            const cnpj = document.getElementById('inp_login').value.replace(/[^\d]+/g, '');
            
            if (cnpj == '') {
                alert("Campo CNPJ vazio")
                return false;
            }
            
                if (cnpj.length != 14) {
                    alert("CNPJ não tem 14 caracteres")
                    return false;
                }
                // Elimina CNPJs invalidos conhecidos
                if (cnpj == "00000000000000" ||
                    cnpj == "11111111111111" ||
                    cnpj == "22222222222222" ||
                    cnpj == "33333333333333" ||
                    cnpj == "44444444444444" ||
                    cnpj == "55555555555555" ||
                    cnpj == "66666666666666" ||
                    cnpj == "77777777777777" ||
                    cnpj == "88888888888888" ||
                    cnpj == "99999999999999") {
            
                    alert("CNPJ inválido")
            
                    return false;
                }
            
                // Valida DVs
                tamanho = cnpj.length - 2
                numeros = cnpj.substring(0, tamanho);
                digitos = cnpj.substring(tamanho);
                soma = 0;
                pos = tamanho - 7;
            
                for (i = tamanho; i >= 1; i--) {
                    soma += numeros.charAt(tamanho - i) * pos--;
                    if (pos < 2)
                        pos = 9;
                }
                resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            
                if (resultado != digitos.charAt(0)) {
                    alert("CNPJ inválido")
                    return false;
                }
            
                tamanho = tamanho + 1;
                numeros = cnpj.substring(0, tamanho);
                soma = 0;
                pos = tamanho - 7;
            
                for (i = tamanho; i >= 1; i--) {
                    soma += numeros.charAt(tamanho - i) * pos--;
                    if (pos < 2) {
                        pos = 9;
                    }
                }
            
                resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            
                if (resultado != digitos.charAt(1)) {
                    alert("CNPJ inválido")
                    return false;
                } else {
                    const senha = document.getElementById('inp_senha').value
            
                    console.log("FORM LOGIN: ", cnpj);
                    console.log("FORM SENHA: ", senha);
            
                    fetch("/funcionarios/autenticar", {
                        method: "POST",
                        headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        cnpjServer: cnpj,
                        senhaServer: senha
                    })
                    }).then(function (resposta) {
                        console.log("ESTOU NO THEN DO login()!")
            
                    if (resposta.ok) {
                        console.log(resposta);
            
                        resposta.json().then(json => {
                        console.log(json[0]);
                        console.log(JSON.stringify(json[0]));
            
                        sessionStorage.ID_FUNCIONARIO = json.idFuncionario;
                        sessionStorage.CPF_FUNCIONARIO = json.cpf;
                        sessionStorage.NOME_FUNCIONARIO = json.nome;
                        sessionStorage.ACESSO_FUNCIONARIO = json.acesso;
            
                        sessionStorage.ID_EMPRESA = json.idEmpresa;
                        sessionStorage.NOME_EMPRESA = json.nomeEmpresa;
                        sessionStorage.CNPJ_EMPRESA = json.cnpj;
            
                        setTimeout(() => {
                            window.location = "dashboard/funcionarios.html";
                        }, 1000);
                    });
                    return true;
                } else {
                    console.log("Houve um erro ao tentar realizar o login!");
                    alert("cnpj ou senha inválidos")
            
                    resposta.text().then(texto => {
                        console.error(texto);
                    });
                }
            
                }).catch(function (erro) {
                    console.log(erro);
                    alert("Erro ao realizar o login")
                })
            
                return false;
                }
    }
}