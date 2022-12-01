function calc() {
    var p = document.getElementById("p").value;
    p = Number(p);
    var r = document.getElementById("r").value;
    r = Number(r);
    var t = document.getElementById("t").value;
    t = Number(t);
    var m = document.getElementById("m").value;
    m = Number(m);

    b = p * (1 + (r/12))**(12*t) - m * ((Math.abs(1 + (r/12))**(12*t)) / (r / n))

    
}