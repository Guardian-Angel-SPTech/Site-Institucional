const secao_empresa = document.getElementById("dados_empresa");
const secao_usuario = document.getElementById("dados_usuario");

const btn_proximo = document.getElementById("btn_proximo")
const btn_voltar = document.getElementById("btn_voltar")
const btn_cadastrar = document.getElementById("btn_cadastrar")

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
    const name = document.getElementById('inp_empresa').value

    if (name == '') {
        alert("Campo Empresa vazio")
        return false
    }

    return true
}

function proximoCampo() {

    if (!validarCnpj() | !validarNomeEmpresa()) {
        return false
    }

    secao_empresa.style.display = "none";
    secao_usuario.style.display = "flex";
    secao_usuario.style.flexDirection = "column";

    return true
}

function voltarCampo() {
    secao_empresa.style.display = "flex";
    secao_empresa.style.flexDirection = "column";
    secao_usuario.style.display = "none";
}

function validarSenha() {
    const senha = document.getElementById('inp_senha').value
    const regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/

    // Verificando se a senha é forte com regex
    if (senha == '') {
        return false
    }

    if (regex.test(senha)) {
        return true
    } else {
        return false
    }
}

// Checando se as duas senhas são iguais
function validarConfimarSenha() {
    const senha = document.getElementById('inp_senha').value
    const senhaConf = document.getElementById('inp_senha_conf').value

    if (senhaConf.length >= 6) {
        if (senha == senhaConf) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

// Validando email
function validarEmail() {
    const email = document.getElementById('inp_email').value
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
    // Essa expressão não garante a veracidade 100% de um email, para ser 100% precisa mandar confirmação por email

    // Validando email se os caracteres do email é válido
    if (email == '') {
        return false
    }

    if (regex.test(email)) {
        return true
    } else {
        return false
    }
}

// Validando nome
function validarName() {
    const name = document.getElementById('inp_name').value
    const regex = /^[a-z].* {1,}[a-z]{1,}/gi

    // Validando a quantidade de palavra e caracteres
    if (name == '') {
        return false
    } else if (regex.test(name)) {
        return true
    } else {
        return false
    }
}

// Enviando os dados para o banco
function register() {
    wait()

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    const nameUser = inp_name.value;
    const nameCorp = inp_name_corp.value;
    const cnpj = inp_cnpj.value;
    const email = inp_email.value;
    const position = 'Chefe';
    const senha = inp_senha.value;

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nameServer: nameUser,
            nameCorpServer: nameCorp,
            emailServer: email,
            cnpjServer: cnpj,
            positionServer: position,
            senhaServer: senha,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            // Logando o usuário e mandando para o dashboard/index
            login(email, senha)
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        phrase = "Houve um erro ao tentar realizar o cadastro!"
        stopWait()
        modalErro(phrase)
    });

    return false;
}

function wait() {
    let loading = document.getElementById('loading_gif')
    btn_prev.style.opacity = '0'
    btn_next.style.opacity = '0'
    loading.style.display = 'block'
}

function stopWait() {
    let loading = document.getElementById('loading_gif')
    loading.style.display = 'none'
    btn_prev.style.opacity = '1'
    btn_next.style.opacity = '1'
}

function modalSucess() {
    let modal_message = document.getElementById('modal_message')
    let title = document.getElementById('title_message')
    let message = document.getElementById('message')
    let img = document.getElementById('modal_loading_gif')

    modal_message.style.opacity = "1"
    img.style.display = "block"
    title.innerHTML = "Cadastro realizado com sucesso"
    message.innerHTML = "Redirecionando"

    setTimeout(() => {
        modal_message.style.opacity = "0"
    }, 2000);
}

function modalErro(phrase) {
    let modal_message = document.getElementById('modal_message')
    let title = document.getElementById('title_message')
    let message = document.getElementById('message')
    let img = document.getElementById('modal_loading_gif')

    modal_message.style.opacity = "1"
    img.style.display = "none"
    title.innerHTML = phrase
    message.innerHTML = ""

    setTimeout(() => {
        modal_message.style.opacity = "0"
    }, 2000);
}

function login(email, senha) {
    fetch("/usuarios/autenticar", {
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

                sessionStorage.ID_USUARIO = json[0].idUsuario;
                sessionStorage.EMAIL_USUARIO = json[0].email;
                sessionStorage.NOME_USUARIO = json[0].nomeUsuario;
                sessionStorage.CARGO_USUARIO = json[0].cargo;

                sessionStorage.ID_EMPRESA = json[0].idEmpresa;
                sessionStorage.NOME_EMPRESA = json[0].nomeEmpresa;
                sessionStorage.CNPJ_EMPRESA = json[0].cnpj;

                modalSucess()
                setTimeout(() => {
                    window.location = "dashboard/index.html";
                }, 1000);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}