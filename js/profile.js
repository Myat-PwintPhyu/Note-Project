window.addEventListener("load", () => {
    if (!localStorage.getItem("userinfo")) {
      window.location.href = "../html/signup.html";
    }
  });
  
  



const userInfo = JSON.parse(localStorage.getItem("userinfo"));

const container = document.getElementsByClassName("userinfoprofile")[0];

const nameElement =document.createElement("h1");
const emailElement = document.createElement("h1");

nameElement.textContent =  "FullName : "+ userInfo.username;
emailElement.textContent = "Email :    "+userInfo.useremail;

container.append(nameElement,emailElement);

const navmenu= document.getElementsByTagName("i")[0];
const navOffcanvas=document.getElementsByClassName("menuOffcanvas")[0];
const navClose=document.getElementsByClassName("menuClose")[0];

navmenu.addEventListener("click",()=>{
    navOffcanvas.style.display ="block";
});
navClose.addEventListener("click",()=>{
    navOffcanvas.style.display ="none";
})