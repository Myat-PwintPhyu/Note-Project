window.addEventListener("load", () => {
  if (!localStorage.getItem("userinfo")) {
   
    window.location.href = "../html/signup.html";
    return;
  }


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

  const NoteData = JSON.parse(localStorage.getItem("notes"));
  const notecount = document.getElementById("notCount");

  
  if (NoteData  !== null) {
    const noteCountText = NoteData.length > 1 ? "Notes" : "Note";
    notecount.textContent = NoteData.length + " " + noteCountText;

    const noteCon = document.getElementById("noteCon");

    
    for (let i = 0; i < NoteData.length; i++) {
      const noteList = document.createElement("div");
      noteList.classList.add("note-list");

      noteList.innerHTML = `
        <div class="noteIcon">
        <img src="https://cdn-icons-png.flaticon.com/128/10595/10595743.png" alt="" width="50px" height="50px">
        <div><p>${NoteData[i].date}</p></div> 
       
        </div>
        <h2>${NoteData[i].title}</h2>
        <div><p>${NoteData[i].body.substr(0,200)}.....</p></div>

      `;
      
      const btn = document.createElement("button")
      btn.classList.add("btn");
      noteList.append(btn);
      btn.innerHTML = "read more"

      btn.addEventListener("click",()=>{
        window.location.href=`../html/detail.html?id=${NoteData[i].id}`
      })

      noteCon.append(noteList);
    }
  } else {
    
    notecount.textContent = "0";
  }
});
