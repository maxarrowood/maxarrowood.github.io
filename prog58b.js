function doMath() { 
    var num1 = document.getElementById("num1").value;
    num1 = Number(num1);
    var num2 = document.getElementById("num2").value;
    num2 = Number(num2);
    var num2 = document.getElementById("num3").value;
    num3 = Number(num3);

    root1 = (-num2 + Math.sqrt(num2**2 - 4 * num1 * num3)) / 2 * num1;
    root2 = (-num2 - Math.sqrt(num2**2 - 4 * num1 * num3)) / 2 * num1;

    var p = document.getElementById("output");
    var out = "";
    out = out + "Root 1: " + root1 + "<br/>";
    out = out + "Root 2: " + root2;
    p.innerHTML = out;
 }

 function reset() { 
    document.getElementById("output").innerHTML = "";
 }