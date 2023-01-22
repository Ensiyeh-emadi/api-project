function validate() {
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");

  if (email.value === "admin" && password.value === "1234")  {
    alert("login succesfully");
    window.location.href = "../Home page/index.html";

    return false;
  } else {
    alert("login failed");
    window.location.href = "index.html";
    return false;
  }
}
