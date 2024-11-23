let Url = "https://reqres.in/api/login"
// charles.morris@reqres.in
// pistol
let email = document.getElementById("email")
let password = document.getElementById("password")
let login = () => {
    console.log(email.value)
    console.log(password.value)
    axios.post(Url,{
        "username" : email.value,
        "password" : password.value
    }).then((res) => {
        let token = res.data.token
        localStorage.setItem("token", token)
        console.log(token);
        window.location.href = "/logged.html";
    }).catch((err) => {
        alert(err.response.data.error);
    });
}
// login()

// Select the form element
const form = document.querySelector("form");

// Add an event listener for the submit event
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the form from refreshing the page
  login()  
//   email.value = ""
//   password.value = ""
});