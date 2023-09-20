const navImgLogo = document.querySelector(".navbar__img-logo");
const btnSendMessage = document.querySelector(".btn-send-message");

//Send message
btnSendMessage.addEventListener("click", function (e) {
  var name = document.getElementById("formGroupInputName").value;
  var email = document.getElementById("formGroupInputEmail").value;
  var message = document.getElementById("formGroupInputMessage").value;

  console.log(name);
  console.log(email);
  console.log(message);
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "calin1996mh@gmail.com",
    Password: "2438AEF7E3E78732E4C8CA2EB7B54EE4E465",
    To: email,
    From: "calin1996mh@gmail.com",
    Subject: "Calin subject",
    Body: "calin body",
  }).then((message) => alert(message));
});

//Navigation
document.querySelector(".navbar-nav").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
