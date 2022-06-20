function ChangeMotH1() {
    let listeMot = ["Web" ,  "Front-End" ];
    let changeMot = document.querySelector("#changeMot");
    changeMot.innerHTML = Math.random() > 0.5 ? listeMot[0] : listeMot[1];
}setInterval(ChangeMotH1 ,3000);

function Day() {
    let span = document.querySelector(".orange");
    document.querySelector(".day").addEventListener("click" , function() {
        let body = document.querySelector("body");
        body.classList.toggle("bgDay");
    })
}Day();