const secao_empresa = document.getElementById("dados_empresa");
const secao_funcionario = document.getElementById("dados_usuario");
const btn_cadastrar = document.getElementById("btn_cadastrar")

btn_cadastrar.addEventListener('click', checarCadastro)

function validarNome() {
    const nome = document.getElementById('inp_nome').value

    // Validando a quantidade de palavra e caracteres
    if (nome == '') {
        return false
    } else {
        return true
    }
}

function validarCPF() {
    let strCPF = document.getElementById('inp_cpf').value;
    let Soma;
    let Resto;
    strCPF = strCPF.replace(/[^\d]+/g, '');
    Soma = 0;

    if (strCPF == '') {
        alert("Campo vazio")
        return false;
    }
    if (strCPF == "00000000000" ||
        strCPF == "11111111111" ||
        strCPF == "22222222222" ||
        strCPF == "33333333333" ||
        strCPF == "44444444444" ||
        strCPF == "55555555555" ||
        strCPF == "66666666666" ||
        strCPF == "77777777777" ||
        strCPF == "88888888888" ||
        strCPF == "99999999999") {

        alert("Cpf inválido")
        return false;
    }

    for (i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
    }

    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }

    if (Resto != parseInt(strCPF.substring(9, 10))) {
        alert("Cpf inválido")
        return false;
    }

    Soma = 0;
    for (i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    }

    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }
    if (Resto != parseInt(strCPF.substring(10, 11))) {
        alert("Cpf inválido")
        return false;
    } else {
        return true;
    }
}

function  gerarEmail() {
    const nome = document.getElementById('inp_nome').value
    let dominio = '@gmail.com'
    const verificaEspaco = nome.indexOf(' ') >= 0 ? true : false;
    if (verificaEspaco) {
        let nomeSemEspaco = nome.replaceAll(' ', '.')
        nomeSemEspaco = nomeSemEspaco.toLowerCase()
        let email = nomeSemEspaco + dominio
        return email
    } else {
        alert("Por favor insira nome e sobrenome!")
    }
 }

function gerarSenha() {
    const nome = document.getElementById('inp_nome').value
    let senha_bruta = document.getElementById('inp_cpf').value
    let senha = `#GF${senha_bruta}` 
    return senha
}


function checarCadastro() {
    if (!validarNome() | !validarCPF() | !gerarEmail() | !gerarSenha()) {
        return false
    }
    cadastrar()
}

// Enviando os dados para o banco
function cadastrar() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    const nomeUser = inp_nome.value;
    const email = gerarEmail();
    const cpf = inp_cpf.value;
    const acesso = select_acess.value;
    const senha = gerarSenha();
    const sisOp = inp_sisOp.value;
    const empresaRelacionada = sessionStorage.ID_EMPRESA;
    // Enviando o valor da nova input
    fetch("/funcionarios/registrarfuncionarioeMaquina", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/funcionario.js
            nomeUserServer: nomeUser,
            emailServer: email,
            cpfServer: cpf,
            acessoServer: acesso,
            senhaServer: senha,
            sisOpServer: sisOp,
            fkEmpresaServer: empresaRelacionada
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);
        alert("Cadastro realizado!")
        setTimeout(() => {
            window.location = "funcionarios.html";
        }, 1000);
        if (resposta.ok) {
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        alert("Houve um erro ao tentar realizar o cadastro!")
    });

    return false;
}