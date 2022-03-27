function signup() {
  let data = localStorage.getItem("userData");
  console.log(data);
  let useremail = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  var flagUser = false;
  let obj = {
    useremail,
    password,
  };
  if (!data) {
    localStorage.setItem("userData", JSON.stringify([obj]));
    // console.log(data)
  } else {
    let userdata = JSON.parse(data);
    for (var i = 0; i <= userdata.length; i++) {
      if (useremail == userdata[i].useremail) {
        alert("Email Already Exits");
        flagUser = true;
      }
      if (!flagUser) {
        userdata.push(obj);
        localStorage.setItem("userData", JSON.stringify(userdata));
      }
    }
  }
}

function login() {
  let data = localStorage.getItem("userData");
  let useremail = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(data);
  let userdata = JSON.parse(data);
  console.log(userdata)
  flagUser = false;

  for (var i = 0; i < userdata.length; i++) {
    if (useremail === userdata[i].useremail  ) {
      console.log("Developerss");
      flagUser = true;
      if(password===userdata[i].password){
          console.log("Welcome Developersss")
      }
      else{
          console.log("Wrong Password")
      }
    }
    else{
        console.log("Sign-up-First")
    }
  }
}

