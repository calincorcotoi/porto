const btnSendMessage = document.querySelector(".btn-send-message");
const notificationContainer = document.getElementById("alert-container");

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
  }).then((message) => {
    $("#ModalMessage").modal("hide");
    var messageNotification;
    if (message.includes("OK"))
      messageNotification = addNotification(
        "primary",
        "Message send with succes!"
      );
    else messageNotification = addNotification("danger", message);

    setTimeout(() => {
      removeNotification(messageNotification);
    }, 5000);
  });
});

//Scroll Navigation
document.querySelector(".navbar-nav").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//Show Alert(notification)
// for types check this site :https://getbootstrap.com/docs/4.0/components/alerts/
const addNotification = function (type, text) {
  // create the DIV and add the required classes
  const newNotification = document.createElement("div");
  newNotification.classList.add("alert", `alert-${type}`);

  const innerNotification = `
  ${text}
`;

  // insert the inner elements
  newNotification.innerHTML = innerNotification;

  // add the newNotification to the container
  notificationContainer.appendChild(newNotification);

  return newNotification;
};

const removeNotification = function (notification) {
  notification.classList.add("hide");

  // remove notification from the DOM after 0.5 seconds
  setTimeout(() => {
    notificationContainer.removeChild(notification);
  }, 500);
};
