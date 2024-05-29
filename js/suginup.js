const nameInput = document.getElementsByTagName("input")[0];
const emailInput = document.getElementsByTagName("input")[1];
const passwordInput = document.getElementsByTagName("input")[2];
const conpassInput = document.getElementsByTagName("input")[3];
const submitbtn = document.getElementsByTagName("button")[0];
const errorContainer = document.getElementById("error-container"); 

const user = {};

const userData = (username, useremail, userpass, usercompass) => {
  user.username = username;
  user.useremail = useremail;
  user.userpass = userpass;
  user.usercompass = usercompass;

  const JSON_user = JSON.stringify(user);
  localStorage.setItem("userinfo", JSON_user);

  window.location.href = "../html/home.html";
};




const showError = (message) => {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;

  
  errorContainer.appendChild(errorMessage);

  setTimeout(() => {
    errorContainer.removeChild(errorMessage);
}, 3000);
};




submitbtn.addEventListener("click", (e) => {
  e.preventDefault();

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const username = nameInput.value;
  const useremail = emailInput.value;
  const userpass = passwordInput.value;
  const usercompass = conpassInput.value;
  clearErrors();

  if (username === "" || useremail === "" || userpass === "" || usercompass === "") {
    showError("Please fill in all fields.");
  } else if (!emailPattern.test(emailInput.value)) {
    showError("Please enter a valid email address.");
  } else if (userpass !== usercompass) {
    showError("Passwords don't match.");
  } else if (userpass.length < 4) {
    showError("Password must be at least 4 characters long.");
  } else {
    userData(username, useremail, userpass, usercompass);
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("userinfo")) {
    window.location.href = "../html/home.html";
  }
});

const clearErrors = () => {
  errorContainer.innerHTML = "";
};
