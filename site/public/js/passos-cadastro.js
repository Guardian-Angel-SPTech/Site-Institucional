secao_empresa = document.getElementById("dados_empresa");
secao_usuario = document.getElementById("dados_usuario");

function proximoPasso(){

    campo_cnpj = inp_cnpj.value;
    campo_empresa = inp_empresa.value;

    if(campo_cnpj == ""){
        alert("CNPJ VAZIO!");
    }else{
        if(campo_empresa == ""){
            alert("EMPRESA VAZIO!");
        }else{
            secao_empresa.style.display = "none";
            secao_usuario.style.display = "flex";
            secao_usuario.style.flexDirection = "column";
        }
    }
    
}

function passoAnterior(){
    secao_empresa.style.display = "flex";
    secao_empresa.style.flexDirection = "column";
    secao_usuario.style.display = "none";
}