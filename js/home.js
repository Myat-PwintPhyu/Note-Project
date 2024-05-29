const navmenu= document.getElementsByTagName("i")[0];
const navOffcanvas=document.getElementsByClassName("menuOffcanvas")[0];
const navClose=document.getElementsByClassName("menuClose")[0];

navmenu.addEventListener("click",()=>{
    navOffcanvas.style.display ="block";
});
navClose.addEventListener("click",()=>{
    navOffcanvas.style.display ="none";
})

window.addEventListener("load",()=>{
    if(localStorage.getItem("userinfo")){
       return
    }else{
        window.location.href ="../html/signup.html";
    }
});


const savebtn = document.getElementById("save");
const titleINp = document.getElementsByTagName("input")[0];
const bodyInp = document.getElementsByTagName("textarea")[0];



let notes = []; // Declare notes globally

window.addEventListener("load", () => {
    if (localStorage.getItem("notes")) {
        const previousData = JSON.parse(localStorage.getItem("notes"));
        notes = [...previousData]; // Assign data to the globally declared notes variable
    }
});




  const formatDate = (date) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const d = new Date(date);

    // Extracting date components
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = String(d.getFullYear()).slice(2); // Extracting last two digits of the year

    // Extracting time components
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const seconds = String(d.getSeconds()).padStart(2, "0");

    // Getting day of the week
    const dayOfWeekIndex = d.getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];

    // Combining date, day of the week, and time components into desired format
    const formattedDate = `${dayOfWeek}, ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
    
};

const generateRandomId = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};



savebtn.addEventListener("click",(e)=>{
e.preventDefault();

const title = titleINp.value.toUpperCase();
const body = bodyInp.value;

if(title===""|| body===""){
  alert("Fill all field")
    return;
}

if (title.length > 200) {
  alert("Title is in limited!");
    return;
  }

  if (body.length > 2200) {
    alert("Body is in limited!");
    return;
  }

const noteObj = {
id:generateRandomId(4),
title:title,
body:body,
date:formatDate(Date.now())
}

notes.unshift(noteObj);

const JSONNote = JSON.stringify(notes);
localStorage.setItem("notes",JSONNote);

titleINp.value="";
bodyInp.value="";


alert(`${title} is successfully saved`);
  window.location.href = "../html/Note.html";
})