let btn0 = document.getElementsByClassName("menu-collapse")[0]
let btn1 = document.getElementsByClassName("menu-collapse")[1]
let btn2 = document.getElementsByClassName("menu-collapse")[2]

btn0.addEventListener('click', collapse(0))
btn1.addEventListener('click', collapse(1))
btn2.addEventListener('click', collapse(2))

function collapse(i) {
    const list = document.getElementsByClassName("list-collapse")[i]
    const arrow = document.getElementsByClassName("btn-arrow")[i]

    if (list.style.height != "0px") {

        list.style.height = "0px"
        arrow.style.transform = "rotate(0deg)"

        list = setTimeout(() => {
            list.style.overflowY = "hidden"
        }, 1000);

        lisclearTimeout(list);
    } else {

        list.style.height = "200px"
        arrow.style.transform = "rotate(90deg)"

        list = setTimeout(() => {
            list.style.overflowY = "auto"
        }, 1000);


        lisclearTimeout(list);
    }
}