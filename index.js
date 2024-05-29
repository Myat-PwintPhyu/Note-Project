window.addEventListener("load", () => { 
    if (localStorage.getItem("userinfo")) {
        window.location.href = "./html/home.html"
    }
 })

 const errorContainer = document.getElementById("error-container"); 
 const showError = (message) => {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;
  
    
    errorContainer.appendChild(errorMessage);
  
    setTimeout(() => {
      errorContainer.removeChild(errorMessage);
  }, 4000);
  };

 const loginBtn = document.getElementsByClassName("login")[0];

 loginBtn.addEventListener("click",()=>{
    showError("Login Don't work ,Please Signup")
 })