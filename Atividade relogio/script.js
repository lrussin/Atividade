let timer = null;
let started = false;


function clock() {
    function timer() {
        const today = new Date();
        const hours = today.getHours(),
        minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes(),
        seconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
        
        return `${hours}:${minutes}:${seconds}`;
    }
    return setInterval(function(){ 
        document.querySelector('.timer').textContent = timer();
    }, 1000);
}

document.querySelector('.start').onclick = function start() {
    if (!started) {
        timer = clock();
        started = true;
        document.querySelector('.timer').style.color = "#008000";
        document.querySelector('.centralizar').style.borderColor = "#008000";
        document.querySelector('.centralizar').style.borderWidth = "6px";
        document.querySelector('.centralizar').style.borderStyle = "solid";
        setTimeout(function(){ 
            document.querySelector('.timer').style.color = "#000";
            document.querySelector('.centralizar').style.borderColor = "";
        }, 3000);

        
    }
}

document.querySelector('.stop').onclick = function stop() {
    clearInterval(timer);
    started = false;
    document.querySelector('.timer').style.color = "#FFFF00";
    document.querySelector('.centralizar').style.borderColor = "#FFFF00";
    document.querySelector('.centralizar').style.borderWidth = "6px";
    document.querySelector('.centralizar').style.borderStyle = "solid";
    setTimeout(function(){ 
        document.querySelector('.timer').style.color = "#000";
        document.querySelector('.centralizar').style.borderColor = "";
    }, 3000);
}

document.querySelector('.reset').onclick = function reset() {
    clearInterval(timer);
    started = false;
    document.querySelector('.timer').textContent = "00:00:00";
    document.querySelector('.timer').style.color = "#FF0000";
    document.querySelector('.centralizar').style.borderColor = "#FF0000";
    document.querySelector('.centralizar').style.borderWidth = "6px";
    document.querySelector('.centralizar').style.borderStyle = "solid";
    setTimeout(function(){ 
        document.querySelector('.timer').style.color = "#000";
        document.querySelector('.centralizar').style.borderColor = "";
    }, 3000);


}