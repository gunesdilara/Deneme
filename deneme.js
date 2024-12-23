document.getElementsByClassName("harfler")[0].style.fontSize="22 px";
document.getElementsByClassName("harfler")[1].style.fontSize="22 px";
document.getElementsByClassName("harfler")[0].style.color="white";
document.getElementsByClassName("harfler")[1].style.color="white";

document.getElementsByTagName("span")[2].style.borderBottomStyle="solid";
document.getElementsByTagName("span")[2].style.borderBottomSize="2 px";

function darkMode(){
    document.getElementsByTagName("body")[0].style.color="white";
    document.getElementsByTagName("body")[0].style.backgroundColor="black";
}

function lightMode(){
    document.getElementsByTagName("body")[0].style.color="black";
    document.getElementsByTagName("body")[0].style.backgroundColor="white";
}

function resmiGoster1(){
    document.getElementById("resim1").style.zIndex=2;
    document.getElementById("resim2").style.zIndex=1;
    document.getElementById("resim3").style.zIndex=1;
}

function resmiGoster2(){
    document.getElementById("resim1").style.zIndex=1;
    document.getElementById("resim2").style.zIndex=2;
    document.getElementById("resim3").style.zIndex=1;
}

function resmiGoster3(){
    document.getElementById("resim1").style.zIndex=1;
    document.getElementById("resim2").style.zIndex=1;
    document.getElementById("resim3").style.zIndex=2;
}

function birlestir(ad, soyad){
    var adSoyad = ad + "" + soyad;
    return adSoyad;
}
