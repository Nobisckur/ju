let btn = document.getElementById("btn");
let valide = document.getElementById("valide");
let liste =document.getElementById("liste");
btn.addEventListener("click", vld);

function vld(event){
    console.log("oui");
    if(valide.style.display ==="block"){
        valide.style.display ="none";
        liste.style.display="block";
        btn.src="oui.jpg";
    }
    else{
        valide.style.display ="block";
        liste.style.display="none";
        btn.src="non.png";
    }

}
