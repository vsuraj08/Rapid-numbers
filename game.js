let bottom_box = document.querySelector(".bottom-box")
let t2 = document.querySelector("t2")
let hit = document.querySelector("h2")
let score = document.querySelector("s2")
var b;
var score_variable = 0

function makebubbles() {


    for (var i = 0; i < 60; i++) {
        b = Math.floor(Math.random() * 10)

        var clutter = `<div class="bubble" >${b}</div>`
        bottom_box.innerHTML += clutter

    }
}

let timer = 20
setInterval(() => {
    if (timer <= 0) {
        bottom_box.innerHTML = `<p> GAMEOVER </p> <p> YOUR SCORE IS ${score_variable}</p>`
        
        
        
        
    }
    else {

        timer--
        t2.innerHTML = timer
    }

}, 1000);


function hitguess() {
    hit.innerHTML = Math.floor(Math.random() * 10)
}



bottom_box.addEventListener("click", function hi(e) {
    // console.log(e.target.innerHTML);

    if (e.target.innerHTML == hit.innerHTML) {
        score_variable = score_variable + 10
        score.innerHTML = score_variable
        hitguess()
        bottom_box.innerHTML=''
        makebubbles()
    }
    else{
        score_variable=score_variable - 10 
        score.innerHTML = score_variable

    }


})



























makebubbles()
hitguess()


















