const menuicon =document.querySelector("#menu-icon i");
const sidebar = document.querySelector(".sidebar");
const wrong=document.querySelector("#wrong");
const yourcart= document.querySelector("#cart");
const sidebarright =document.querySelector(".sidebar-right");
const cartwrong=document.querySelector("#cart-wrong");



menuicon.addEventListener("click",()=>{
   sidebar.style.display="block"
   

});
wrong.addEventListener("click",()=>{
    sidebar.style.display="none"
    
 });
 

 yourcart.addEventListener("click",()=>{
   sidebarright.style.display ="block"
 })
cartwrong.addEventListener("click",()=>{
   sidebarright.style.display="none"
})


