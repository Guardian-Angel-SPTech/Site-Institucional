const leftBtn = document.getElementById("btn-l-aside")

leftBtn.addEventListener('click', () => {
    const list = document.getElementsByClassName("list-collapse")[0]
    const arrow = document.getElementById("btn-arrow")

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

})
