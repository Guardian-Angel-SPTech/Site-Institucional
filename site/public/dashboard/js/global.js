const btn0 = document.getElementsByClassName("menu-collapse")[0]
const btn1 = document.getElementsByClassName("menu-collapse")[1]
const btn2 = document.getElementsByClassName("menu-collapse")[2]

btn0.addEventListener('click', collapse)
btn1.addEventListener('click', collapse)
btn2.addEventListener('click', collapse)

btn0.i = 0;
btn1.i = 1;
btn2.i = 2;

function collapse(evt) {
    const list = document.getElementsByClassName("list-collapse")[evt.currentTarget.i]
    const arrow = document.getElementsByClassName("btn-arrow")[evt.currentTarget.i]

    if (list.style.height != "0px") {

        list.style.height = "0px"
        arrow.style.transform = "rotate(0deg)"

        clearTimeout(list);
    } else {

        list.style.height = "200px"
        arrow.style.transform = "rotate(90deg)"

        list = setTimeout(() => {
            list.style.overflowY = "auto"
        }, 1000);


        clearTimeout(list);
    }
}
