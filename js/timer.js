class Timer {

    constructor() {
        this.idTimeout;
        this.idInterval;
        this.secondsLimit = 120;
        this.timerBlock = document.querySelector('#timer');
        this.startTimer();
    }

    addErrorBlock() {
        clearTimeout(this.idTimeout);
        let modal = document.querySelector('.modal');
        modal.style.display = 'flex';
    }

    setInterval(){
        this.idInterval = setInterval(() => {
            let oneMin = 60;

            if (this.secondsLimit > oneMin) {
                if (this.secondsLimit - oneMin > 10) {
                    this.timerBlock.innerText = `01:${--this.secondsLimit - oneMin}`;
                } else {
                    this.timerBlock.innerText = `01:0${--this.secondsLimit - oneMin}`;
                }
            } else {
                if (this.secondsLimit > 10) {
                    this.timerBlock.innerText = `00:${--this.secondsLimit}`;
                } else {
                    this.timerBlock.innerText = `00:0${--this.secondsLimit}`;
                }
            }
        }, 1000);
    }

    setTimeout(){
        this.idTimeout = setTimeout(() => {
            document.onclick = null;
            document.onkeyup = null;
            document.onmousemove = null;

            clearInterval(this.idInterval);
            this.addErrorBlock();
        }, 120000);
    }

    startTimer() {
        this.setTimeout();
        this.setInterval();
    }

    restartTimer() {
        clearInterval(this.idInterval);
        clearTimeout(this.idTimeout);
        this.secondsLimit = 120;
        this.timerBlock.innerText = '02:00';
        this.startTimer();
    }
}