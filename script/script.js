const comment = {
    Otsenka: {
        p: 'hbol',
        text: 'Спасибо за оценку!'
    }
};

const img = document.getElementById("Otsenka");
const p = document.getElementById(comment["Otsenka"].p);
const ang_btn = document.getElementById("buttons3");
    
if (img && p) {
    img.addEventListener("mousedown", function() {
        p.textContent = comment["Otsenka"].text;
    });
}

buttons3.addEventListener("click", function(){
    window.location.href = "angry_mobs.html"
})

buttons2.addEventListener("click", function(){
    window.location.href = "body_netral.html"
})

buttons1.addEventListener("click", function(){
    window.location.href = "Body.html"
})
