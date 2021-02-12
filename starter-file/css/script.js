const walou = document.querySelector("#tog");
const naav = document.getElementsByClassName("nav-gauche");
console.log(walou);
walou.addEventListener("click",(e)=>{
    console.log('evant');
    naav.classList.toggle(".show");
})