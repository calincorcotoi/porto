const navImgLogo = document.querySelector(".navbar__img-logo");
const btnSendMessage = document.querySelector(".btn-send-message");

//Send message
btnSendMessage.addEventListener("click", function (e) {
  var name = document.getElementById("formGroupInputName").value;
  var email = document.getElementById("formGroupInputEmail").value;
  var message = document.getElementById("formGroupInputMessage").value;

  Email.send({
    SecureToken: "5e2012de-587b-44c9-b9b6-ad56399784af",
    To: "calin.corcotoi@gmail.com",
    From: "calin.corcotoi@gmail.com",
    Subject: `Message from ${name}`,
    Body: `
    <h1>Email: </h1>${email}
    <br>
    <h1>Message: </h1>${message}
    `,
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
