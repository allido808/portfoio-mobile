const walou = document.querySelector("#tog");
const naav = document.getElementById("navME")

walou.addEventListener("click",()=>{
  naav.style.left == "-300px" ? naav.style.left = '0' : naav.style.left = '-300px'
})