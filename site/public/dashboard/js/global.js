


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