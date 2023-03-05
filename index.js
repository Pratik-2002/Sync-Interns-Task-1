let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

const passwordInput = document.querySelector("#password");
const eye = document.querySelector("#eye");
function logIn() {
    // alert("Login Succesfull !!")
    swal("Good job!", "You Log In Succefully!", "success");
}


eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
     passwordInput.setAttribute("type", type)
  })
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});