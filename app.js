
// --- Time display ---

setInterval(() => {
let time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();
let seconds = time.getSeconds();

hour = (hour < 10) ? "0" + hour : hour;
minute = (minute < 10) ? "0" + minute : minute;
seconds = (seconds < 10) ? "0" + seconds : seconds;

document.getElementById('hour').innerHTML = `${hour}`;
document.getElementById('minute').innerHTML = `:${minute}`;
document.getElementById('seconds').innerHTML = `:${seconds}`;
});

// --- Light - Dark Theme ---

const themeLink = document.querySelector('#theme-changer')
const buttonON = document.querySelector('#light-off');
const buttonOFF = document.querySelector('#light-on');
buttonON.style.display = 'none';

const turnLightON = () => {
    themeLink.href = 'style-dark.css';
    buttonON.style.display = 'none';
    buttonOFF.style.display = 'block';
}

const turnLightOFF = () => {
    themeLink.href = 'style-light.css';
    buttonOFF.style.display = 'none';
    buttonON.style.display = 'block';
}

buttonON.addEventListener('click', turnLightON);
buttonOFF.addEventListener('click', turnLightOFF);