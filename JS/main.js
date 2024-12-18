const button = document.getElementById("js--menu");
const nav = document.getElementById("js--nav");
const body = document.getElementById("js--body");

function NavShow(){
    nav.style.visibility = "visible";
    nav.style.opacity = 1;
    body.style.overflow = "hidden";
}


button.onclick = NavShow;