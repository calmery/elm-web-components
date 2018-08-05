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

element.sendMessage("Hello !");

// For Tests

module.exports = {
  flags
};
