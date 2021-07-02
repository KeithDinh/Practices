
function hide() {
    document.querySelectorAll("#Problem3 .container__list").forEach(function (element) {
        element.classList.add("d-none");
    })
    document.querySelectorAll("#Problem3 .container__pages li").forEach(function (element) {
        if (element.classList.contains("bg-warning")) {
            element.classList.replace("bg-warning", "bg-info");
        }
    })
}

function show(number) {
    hide();
    document.querySelectorAll("#Problem3 .container__list")[number - 1].classList.remove("d-none");
    document.querySelectorAll("#Problem3 .container__pages li")[number - 1].classList.replace("bg-info", "bg-warning");
}

function nextPage() {
    var paginations = document.querySelectorAll("#Problem3 .container__pages li");
    for (var i = 0; i < paginations.length-1; i++) {
        if (paginations[i].classList.contains("bg-warning")) {
            paginations[i].classList.replace("bg-warning", "bg-info");
            if (i != paginations.length - 2) {
                paginations[i + 1].classList.replace("bg-info", "bg-warning");
                show(i + 2);
            } else {
                paginations[0].classList.replace("bg-info", "bg-warning");
                show(1);
            }
            break;
        }
    }
}