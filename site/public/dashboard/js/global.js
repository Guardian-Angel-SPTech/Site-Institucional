const btn0 = document.getElementsByClassName("menu-collapse")[0]
const btn1 = document.getElementsByClassName("menu-collapse")[1]

btn0.addEventListener('click', collapse)
btn1.addEventListener('click', collapse)

btn0.i = 0;
btn1.i = 1;

function collapse(evt) {
    const list = document.getElementsByClassName("list-collapse")[evt.currentTarget.i]
    const arrow = document.getElementsByClassName("btn-arrow")[evt.currentTarget.i]

    if (list.style.height != "200px") {

        list.style.height = "200px"
        arrow.style.transform = "rotate(0deg)"

        clearTimeout(list);
    } else {

        list.style.height = "0px"
        arrow.style.transform = "rotate(90deg)"

        list = setTimeout(() => {
            list.style.overflowY = "auto"
        }, 1000);


        clearTimeout(list);
    }
}
const nav = document.querySelector('#header nav');
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