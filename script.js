function ChangeMotH1() {
    let listeMot = ["Web" ,  "Front-End" ];
    let changeMot = document.querySelector("#changeMot");
    changeMot.innerHTML = Math.random() > 0.5 ? listeMot[0] : listeMot[1];
        
}setInterval(ChangeMotH1 ,3000);