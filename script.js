
// For Form
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}









//for menubar
var menuItems = document.getElementById('menuItems');
    menuItems.style.maxHeight = "0px";
function manu(){
    if(menuItems.style.maxHeight =="0px"){
        menuItems.style.maxHeight = "200px"
    }else{
        menuItems.style.maxHeight = "0px"
    }
}
//for product gallery

var ProductImg = document.getElementById("ProductImg");
var smallImg = document.getElementsByClassName("small-img");
smallImg[0] .onclick = function(){
    ProductImg.src = smallImg[0].src;
}
smallImg[1] .onclick = function(){
    ProductImg.src = smallImg[1].src;
}
smallImg[2] .onclick = function(){
    ProductImg.src = smallImg[2].src;
}
smallImg[3] .onclick = function(){
    ProductImg.src = smallImg[3].src;
}

//JS for form
