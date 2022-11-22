const secao_empresa = document.getElementById("dados_empresa");
const secao_funcionario = document.getElementById("dados_usuario");

const btn_proximo = document.getElementById("btn_proximo")
const btn_voltar = document.getElementById("btn_voltar")
const btn_cadastrar = document.getElementById("btn_cadastrar")
const btn_cadastrarN = document.getElementById("btn_cadastrarN")

btn_proximo.addEventListener('click', proximoCampo)
btn_voltar.addEventListener('click', voltarCampo)
btn_cadastrar.addEventListener('click', checarCadastro)

function validarCnpj() {
    const cnpj = document.getElementById('inp_cnpj').value.replace(/[^\d]+/g, '');

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
        return true;
    }
}

function validarNomeEmpresa() {
    const nome = document.getElementById('inp_empresa').value

    if (nome == '') {
        alert("Campo Empresa vazio")
        return false
    }

    return true
}

function proximoCampo() {

    if (!validarCnpj() | !validarNomeEmpresa()) {
        return
    }

    secao_empresa.style.display = "none";
    secao_funcionario.style.display = "flex";
    secao_funcionario.style.flexDirection = "column";
}

function voltarCampo() {
    secao_empresa.style.display = "flex";
    secao_empresa.style.flexDirection = "column";
    secao_funcionario.style.display = "none";
}

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
    const nomeEmpresa = inp_empresa.value;
    const email = inp_email.value;
    const cpf = inp_cpf.value;
    const cnpj = inp_cnpj.value;
    const acesso = '1';
    const senha = inp_senha.value;

    // Enviando o valor da nova input
    fetch("/funcionarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/funcionario.js
            nomeUserServer: nomeUser,
            nomeEmpresaServer: nomeEmpresa,
            emailServer: email,
            cpfServer: cpf,
            cnpjServer: cnpj,
            acessoServer: acesso,
            senhaServer: senha,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            // Logando o usuário e mandando para o dashboard/index
            // login(cnpj, senha)
            alert("SALVE, É OS CRIA")
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        alert("Houve um erro ao tentar realizar o cadastro!")
    });

    return false;
}

function login(cnpj, senha) {
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
                    window.location = "dashboard/index.html";
                }, 1000);
            });

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
