// Checando se senha é válida
function checarSenha() {
    const senha = document.getElementById('inp_senha').value
    const regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/

    // Verificando se a senha é forte com regex
    if (senha == '') {
        return false
    } else if (regex.test(pass)) {
        return true
    } else {
        return false
    }
}

// Validando email
function valEmail() {
    const email = document.getElementById('inp_email').value
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
    // Essa expressão não garante a veracidade 100% de um email, para ser 100% precisa mandar confirmação por email

    // Validando email se os caracteres do email é válido
    if (email == '') {
        label_email.className = 'label-float invalid'
        warning_email.innerHTML = 'Digite um email válido'
        return false
    } else if (regex.test(email)) {
        warning_email.innerHTML = ''
        label_email.className = 'label-float valid'
        return true
    } else {
        label_email.className = 'label-float missing'
        warning_email.innerHTML = 'Digite um email válido'
        return false
    }
}
// Chamando a função login quando clicar no botão de login
var btn = document.getElementById('btn_login')
btn.addEventListener("click", login)

// Validando a entrada do usuário
function login() {
    // wait()

    const email = document.getElementById('inp_email').value
    const pass = document.getElementById('inp_pass').value

    if (!valEmail() | !passCheck()) {
        phrase = "Preencha todos os campos corretamente"
        stopWait()
        modalErro(phrase)
        return false
    }

    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", pass);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            passServer: pass
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

        } else {
            console.log("Houve um erro ao tentar realizar o login!");
            phrase = "Email ou senha inválidos"
            modalErro(phrase)

            label_email.className = 'label-float missing'
            label_pass.className = 'label-float missing'

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
        phrase = "Erro ao realizar o login"
        stopWait()
        modalErro(phrase)
    })

    return false;
}

const loading = document.getElementById('loading_gif')
const modal_message = document.getElementById('modal_message')
const title = document.getElementById('title_message')
const message = document.getElementById('message')
const img = document.getElementById('modal_loading_gif')

function wait() {
    btn.style.display = 'none'
    loading.style.display = 'block'
}

function stopWait() {
    loading.style.display = 'none'
    btn.style.display = 'block'
}

function modalSucess() {
    modal_message.style.opacity = "1"
    img.style.display = "block"
    title.innerHTML = "Login realizado com sucesso"
    message.innerHTML = "Redirecionando"

    setTimeout(() => {
        modal_message.style.opacity = "0"
    }, 2000);
}

function modalErro(phrase) {
    btn.style.display = 'block'
    loading.style.display = 'none'
    modal_message.style.opacity = "1"
    img.style.display = "none"
    title.innerHTML = phrase
    message.innerHTML = ""

    setTimeout(() => {
        modal_message.style.opacity = "0"
    }, 2000);
}