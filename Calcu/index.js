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
    document.getElementById("output1").innerHTML = ` `;
}

function TriangelPerimeter(){
    const input1 = document.getElementById("sideaT");
    const input2 = document.getElementById("sidebT");
    const input3 = document.getElementById("sidecT");

    const a = parseInt(input1.value.trim());
    const b = parseInt(input2.value.trim());
    const c = parseInt(input3.value.trim());

    let p = a + b + c

    document.getElementById("output2").innerHTML = `The Result is ${p} cm`;
}

function resetTP(){
    const a = document.getElementById("sideaT").value;
    const b = document.getElementById("sidebT").value;
    const c = document.getElementById("sidecT").value;

    a.value = ""
    b.value = ""
    c.value = ""
    document.getElementById("output2").innerHTML = ` `;
}

function ParallelogramArea(){
    const b = document.getElementById("baseP").value;
    const h = document.getElementById("heightP").value;

    const a = b*h

    document.getElementById("output3").innerHTML = `The Result is ${a} cm2`;
}

function resetPA(){
    var b = document.getElementById("baseP");
    var h = document.getElementById("heightP");
    
    b.value = ""
    h.value = ""
    document.getElementById("output3").innerHTML = ` `;
}

function ParallelogramPerimeter(){
    const input1 = document.getElementById("sideaP");
    const input2 = document.getElementById("sidebP");
    const input3 = document.getElementById("sidecP");
    const input4 = document.getElementById("sidedP");

    const a = parseInt(input1.value.trim());
    const b = parseInt(input2.value.trim());
    const c = parseInt(input3.value.trim());
    const d = parseInt(input4.value.trim());

    let p = a + b + c + d

    document.getElementById("output4").innerHTML = `The Result is ${p} cm`;
}

function resetPP(){
    const a = document.getElementById("sideaP").value;
    const b = document.getElementById("sidebP").value;
    const c = document.getElementById("sidecP").value;
    const d = document.getElementById("sidecP").value;

    a.value = ""
    b.value = ""
    c.value = ""
    d.value = ""
    document.getElementById("output4").innerHTML = ` `;
}