const dayTutucu = document.getElementById("days")
const hrTutucu = document.getElementById("hrs")
const minTutucu = document.getElementById("mins")
const secTutucu = document.getElementById("secs")

const buton1 = document.querySelector("#btn1");
const buton2 = document.querySelector("#btn2")

 const teskereAlim = "26  July 2022" // Abim askerde ve bu onun  askerden geleceği tarih

function countdown() {
    const teskereAlimDate= new Date(teskereAlim);
    const suankiZaman = new Date();

    const totalSeconds = (teskereAlimDate - suankiZaman) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) %60;
    const seconds = Math.floor(totalSeconds) %60;

    dayTutucu.innerHTML = days;
    hrTutucu.innerHTML = formatTime(hours);
    minTutucu.innerHTML = formatTime(mins);
    secTutucu.innerHTML = formatTime(seconds);
}


function formatTime(t) {
    return t < 10 ? `0${t}` : t;
}


buton1.addEventListener('click', () => {
    countdown();
});

buton2.addEventListener('click', () => {
    setInterval(countdown, 1000)
});



