import Countdown from "./contador.js";

const dataLive = new Countdown("27 August 2020 20:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function contRegres(){
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = dataLive.total[index];
    });
}
contRegres();
setInterval(contRegres, 1000);