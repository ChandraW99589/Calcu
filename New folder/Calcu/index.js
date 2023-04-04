var a;
function hide(){
    if (a == 1) {
        document.getElementById("triangelA").style.display='inline';
        document.getElementById("triangelP").style.display='inline';
        document.getElementById("parallelogramA").style.display='none';
        document.getElementById("parallelogramP").style.display='none';
        return a=0;
    } else {
        document.getElementById("triangelA").style.display='none';
        document.getElementById("triangelP").style.display='none';
        document.getElementById("parallelogramA").style.display='inline';
        document.getElementById("parallelogramP").style.display='inline';
        return a=1;
    }
}

function TriangelArea(){
    const b = document.getElementById("baseT").value;
    const h = document.getElementById("heightT").value;

    const a = 0.5*b*h

    document.getElementById("output1").innerHTML = `The Result is ${a} cm2`;
}

function resetTA(){
    var b = document.getElementById("baseT");
    var h = document.getElementById("heightT");
    
    b.value = ""
    h.value = ""
    document.getElementById("output1").substr (0, maxlenght);
}




