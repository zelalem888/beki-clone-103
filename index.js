var icon = document.querySelector('.icon');
var hin = document.querySelector('.him');

icon.addEventListener("click",()=>{
    if(icon.firstElementChild.classList.contains("fa-bars")){
        icon.firstElementChild.classList.replace("fa-bars","fa-x")

    }else{
        icon.firstElementChild.classList.replace("fa-x","fa-bars")

    }
    hin.classList.toggle("oneone")



})
 
