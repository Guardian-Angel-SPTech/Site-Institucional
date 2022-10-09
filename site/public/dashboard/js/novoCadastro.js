const secao_empresa = document.getElementById("dados_empresa");
const secao_usuario = document.getElementById("dados_usuario");

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

function validarEmail() {
    const email = document.getElementById('inp_email').value
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

    // Validando email se os caracteres do email é válido
    if (email == '') {
        alert('Email vazio')
        return false
    }

    if (regex.test(email)) {
        return true
    } else {
        alert('Email inválido')
        return false
    }
}

function validarConfimarSenha() {
    const senha = document.getElementById('inp_senha').value
    const senhaConf = document.getElementById('inp_conf_senha').value

    if (senha == senhaConf) {
        return true
    } else {
        alert('As senhas não conferem')
        return false
    }
}

function checarCadastro() {
    if (!validarNome() | !validarCPF() | !validarEmail() | !validarEmail() | !validarConfimarSenha()) {
        return false
    }

    cadastrar()
}

// Enviando os dados para o banco
function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    const nomeUser = inp_nome.value;
    const email = inp_email.value;
    const cpf = inp_cpf.value;
    const acesso = '1';
    const senha = inp_senha.value;

    // Enviando o valor da nova input
    fetch("/usuarios/registrarusuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeUserServer: nomeUser,
            IdServer: sessionStorage.ID_EMPRESA,
            emailServer: email,
            cpfServer: cpf,
            cnpjServer: sessionStorage.CNPJ_EMPRESA,
            acessoServer: acesso,
            senhaServer: senha,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

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