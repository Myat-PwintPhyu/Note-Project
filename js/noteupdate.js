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


const urlParams = new URLSearchParams(window.location.search);

const  noteId =urlParams.get("updateId");

console.log(noteId);

const notes = JSON.parse(localStorage.getItem("notes"));

const updateNote = notes.filter((item)=> noteId==item.id);

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

const title = document.getElementsByTagName("input")[0];
const text= document.getElementsByTagName("textarea")[0];
const saveBtn = document.getElementsByTagName("button")[0];

title.value = updateNote[0].title;
text.value = updateNote[0].body;


saveBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    if(title.value===""|| text.value===""){
        alert("Fill all field")
        return;
    }
    
    if (title.value.length > 200) {
        alert("Title is in limited!");
        return;
      }
    
      if (text.value.length > 2200) {
        alert("Body is in limited!");
        return;
      }

    updateNote[0].title=title.value;
    updateNote[0].body=text.value;
      updateNote[0].date=formatDate(Date.now());
    removeOld = notes.filter((item) => updateNote[0].id != item.id);

    removeOld.unshift(updateNote[0]);

    localStorage.setItem("notes",JSON.stringify(removeOld));

    window.location.href ="../html/Note.html";
})