const btn0 = document.getElementsByClassName("menu-collapse")[0]
const btn1 = document.getElementsByClassName("menu-collapse")[1]

btn0.addEventListener('click', collapse)
btn1.addEventListener('click', collapse)

btn0.i = 0;
btn1.i = 1;

function collapse(evt) {
    const list = document.getElementsByClassName("list-collapse")[evt.currentTarget.i]
    const arrow = document.getElementsByClassName("btn-arrow")[evt.currentTarget.i]

    if (list.style.height != "min-content") {

        list.style.height = "min-content"
        list.style.paddingTop = "1rem"
        list.style.paddingBottom = "1rem"
        arrow.style.transform = "rotate(0deg)"

        clearTimeout(list);
    } else {

        list.style.height = "0px"
        list.style.paddingTop = "0rem"
        list.style.paddingBottom = "0rem"
        arrow.style.transform = "rotate(90deg)"

        list = setTimeout(() => {
            list.style.overflowY = "auto"
        }, 1000);


        clearTimeout(list);
    }
}
const nav = document.querySelector('#header section nav');
const toggle = document.querySelectorAll('section .toggle img')
for( const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
       
    })
    }
    //no click do menu , fecha ele todo 
    
    const links =document.querySelectorAll('nav ul li a')
    for(const link of links){
        link.addEventListener('click', function(){
        nav.classList.remove('show')
    
        })
    }