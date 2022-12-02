function calc() {
    var p = document.getElementById("p").value;
    p = Number(p);
    var r = document.getElementById("r").value;
    r = Number(r) /100;
    var t = document.getElementById("t").value;
    t = Number(t);
    var m = document.getElementById("m").value;
    m = Number(m);
    var n = 12;

    b = p * (1 + (r/n)**(n*t)) - (m * ((1 + (r/n))**(n*t)-1)) / (r/n);

    var p = document.getElementById("out");
    var outp = " ";
    outp = outp + b;
    p.innerHTML = outp;

}

function rst() {
    document.getElementById("out").innerHTML = " ";
}