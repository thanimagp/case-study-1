var validate = (callback) => {
    var user = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    $("#user").text(" ");
    $("#pass").text(" ");
    var count = 0;
  
    if (user.trim() === "admin" && pass.trim() === "12345") {
      localStorage.setItem("username", "admin");
      callback();
    } else if (user.trim() !== "" && pass.trim() !== "") {
      $("#pass").text("Wrong Username or Password ");
      $("#pass").css("color", "red");
    }
    if (user.trim() === "") {
      $("#user").text("Username cannot be blank");
      $("#user").css("color", "red");
    }
    if (pass.trim() === "") {
      $("#pass").text("Password cannot be blank");
      $("#pass").css("color", "red");
    }
  };
  
  function redirect() {
    location.href = "home.html";
  }