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


const urlParam = new URLSearchParams(window.location.search);

const id = urlParam.get("id");

console.log(id);
const notes = JSON.parse(localStorage.getItem("notes"));

const choiceNote = notes.filter((item) => {
  return id == item.id;
});

const detail = document.getElementsByClassName("detail")[0];
const header = document.createElement("h2");
const body = document.createElement("p")

const btnCon =document.createElement("div");
const deleteBtn = document.createElement("button");
const updateBtn = document.createElement("button");


btnCon.classList.add("btnCon");
deleteBtn.classList.add("delBtn")
updateBtn.classList.add("upBtn")


deleteBtn.textContent = "Delete";
updateBtn.textContent ="Update";

btnCon.append(deleteBtn,updateBtn);

detail.innerHTML = `
<div class="detailIcon">
        <img src="https://cdn-icons-png.flaticon.com/128/11328/11328888.png" alt="" width="40px" height="40px">
        <div><p>${choiceNote[0].date}</p></div> 
       
        </div>
`

header.textContent = choiceNote[0].title;
body.textContent=choiceNote[0].body;

detail.append(header,btnCon,body);

const Alert = document.getElementsByClassName("detailDeleteAlert")[0];
const cancleBtn= document.getElementsByClassName("Cancle")[0];
const okBtn = document.getElementsByClassName("Ok")[0];

deleteBtn.addEventListener("click",()=>{
    Alert.style.display = "flex";
})


cancleBtn.addEventListener("click",()=>{
    Alert.style.display = "none";
})

okBtn.addEventListener("click",()=>{
    const newnotes = notes.filter((item)=> id != item.id);
    localStorage.setItem ("notes",JSON.stringify(newnotes));
    window.location.href ="../html/Note.html"
});

updateBtn.addEventListener("click", () => {
    window.location.href = `../html/noteUpdate.html?updateId=${id}`;
  });

  



  