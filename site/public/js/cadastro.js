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
    const nome = document.getElementById('inp_empresa').value

    if (nome == '') {
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

function validarNome() {
    const nome = document.getElementById('inp_nome').value
    const regex = /^[a-z].* {1,}[a-z]{1,}/gi

    // Validando a quantidade de palavra e caracteres
    if (nome == '') {
        return false
    } else if (regex.test(nome)) {
        return true
    } else {
        return false
    }
}

function validarCPF() {
    const cpf = document.getElementById("inp_cpf")

	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

function validarEmail() {
    const email = document.getElementById('inp_email').value
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi

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

function validarConfimarSenha() {
    const senha = document.getElementById('inp_senha').value
    const senhaConf = document.getElementById('inp_conf_senha').value

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

function checarCadastro(){
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
    const cnpj = inp_cnpj.value;
    const email = inp_email.value;
    const cargo = 'Chefe';
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
            nomeUserServer: nomeUser,
            nomeEmpresaServer: nomeEmpresa,
            emailServer: email,
            cnpjServer: cnpj,
            cargoServer: cargo,
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
        alert("Houve um erro ao tentar realizar o cadastro!")
    });

    return false;
}