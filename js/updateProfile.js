// window.addEventListener("load", () => {
//     if (!localStorage.getItem("userinfo")) {
//       window.location.href = "../html/signup.html";
//     }
//   });
  

const navmenu= document.getElementsByTagName("i")[0];
const navOffcanvas=document.getElementsByClassName("menuOffcanvas")[0];
const navClose=document.getElementsByClassName("menuClose")[0];

navmenu.addEventListener("click",()=>{
    navOffcanvas.style.display ="block";
});
navClose.addEventListener("click",()=>{
    navOffcanvas.style.display ="none";
})


const userInfo = JSON.parse(localStorage.getItem("userinfo"));


const nameinp = document.getElementsByTagName("input")[0];
const emailinp = document.getElementsByTagName("input")[1];
const passinp =document.getElementsByTagName("input")[2];

nameinp.value = userInfo.username;
emailinp.value = userInfo.useremail;

const btn =document.getElementsByTagName("button")[0];

btn.addEventListener ("click",(e)=>{
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem("userinfo"));
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailinp.value)) {
        alert("Please enter a valid email address.");
        return;
      }

    if(nameinp.value === "" || emailinp.value ==="" || passinp.value===""){
        alert ("fill all field");
        return;

    }

    if(passinp.value.length<4){
        alert("you should fill 4 char");
        return;

    }

    
    user.username = nameinp.value;
    user.useremail = emailinp.value;
    user.userpass = passinp.value;
    user.usercompass= passinp.value;

    localStorage.setItem("userinfo", JSON.stringify(user));
    window.location.href = "../html/profile.html";
})

