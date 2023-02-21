function today(){
    h = new Date().getHours();
    m = new Date().getMinutes();
    s = new Date().getSeconds();
    document.getElementById("disp").innerText = h + ":" + m + ":" + s;
}
setInterval(today,1000)