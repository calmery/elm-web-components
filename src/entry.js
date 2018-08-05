// SCSS

require("./style.scss");

// Elm

require("./customElements");

// Create Element

const flags = { message: "Hello World" };

const element = document.createElement("elm-embed");
element.dataset.flags = JSON.stringify(flags);

document.body.appendChild(element);

// Events

element.addEventListener("setTitle", event => {
  document.title = event.detail;
});

addEventListener("DOMContentLoaded", () => {
  const sendMessageButton = document.getElementById("send-message-button");

  sendMessageButton.addEventListener("click", () => {
    element.sendMessage("Hello !");
  });
});

// For Tests

module.exports = {
  flags
};
