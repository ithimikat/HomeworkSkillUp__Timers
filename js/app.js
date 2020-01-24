let timer = new Timer();
let btn = document.querySelector('.modal-content button');

btn.onclick = function(){
    location.reload();
};

document.onclick = () => {timer.restartTimer();};
document.onkeyup = () => {timer.restartTimer();};
document.onmousemove = () => {timer.restartTimer();};

