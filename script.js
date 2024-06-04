// let users=[]
// function handleRegister(){
//   let registerEmail =document.getElementById("register-email").value
//   let userFound=false

//   if(registerEmail===""){
//     alert("Please Enter Credentials")
//     return;
//   }
// for(let i=0;i<users.length;i++){
//   if(users[i].email=registerEmail){
//     userFound=true
//     alert("already Registerd")
//     break;
//   }
// }
// if(userFound===false){
//   let newUser={
//     email:registerEmail
//   }
//   alert("Registered Successfully")
//   console.log(newUser,newUser)
//   users.push(newUser)
// }




function showToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,

    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    className: "display-toast",
    onClick: function () { } // Callback after click
  }).showToast();
}

let users = ["abc@gmail.com", "usman@gmail.com"]

function handleUserLogin() {
   event.preventDefault()
  let loginEmail = document.getElementById('login-email').value
  let userFound = false

  if (loginEmail === "") {
    showToast('Please Enter Credentials')
    return
  }
  else {
    for (let i = 0; i < users.length; i++) {

      if (users[i].email === loginEmail) {
        userFound = true
        showToast(`Welcome ${loginEmail}`)
        document.getElementById('main').style.display="none"
        window.location.assign("todo.html");
        break;
      }


    }
  }
  if (userFound == false) {
    showToast('User Not Found')

  }


}

function handleUserRegister() {
  event.preventDefault()
  let registerEmail = document.getElementById('register-email').value
  let alreadyRegistered = false

  if (registerEmail === "") {
    showToast('Please Enter Credentials')
    return
  }
  else {
    for (let i = 0; i < users.length; i++) {

      if (users[i].email === registerEmail) {
        showToast('Already Registered')

        alreadyRegistered = true
        break;
      }

    }
  }


  if (alreadyRegistered === false) {
    let newUser = {
      email: registerEmail,
    }
    showToast('Registration Successful')

    users.push(newUser)
  }



}











