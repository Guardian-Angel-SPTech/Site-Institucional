function clicarBotao() {

    var navbar = document.getElementById("navbar");
    var dropdwon = document.getElementById("dropdown");
    var listaDropdown = document.getElementById("lista-dropdown");

    if(navbar.classList.contains("menu-aberto")){
        navbar.className = "navbar";
        dropdwon.style.display = 'none';
        listaDropdown.style.display = 'none'
    }else{
        navbar.className += " menu-aberto";
        dropdwon.style.display = "flex";
        listaDropdown.style.display = "flex";
    }

}