const Elm = require("./elm/Main.elm");

class ElmEmbed extends HTMLElement {
  constructor() {
    super();

    this._Elm = Elm;
  }

  // Private

  connectedCallback() {
    this.embed();
    this.expandPorts();
  }

  disconnectedCallback() {
    this.contractPorts();
  }

  embed() {
    this.elm = this._Elm.Main.embed(
      this,
      this.getAttribute("data-flags") || undefined
    );
  }

  // Ports

  expandPorts() {
    Object.entries(this.elm.ports).forEach(([key, value]) => {
      if (value.hasOwnProperty("subscribe")) {
        value.subscribe(detail => {
          this.dispatchEvent(new CustomEvent(key, { detail }));
        });
      } else {
        this[key] = value.send;
      }
    });
  }

  contractPorts() {
    Object.entries(this.elm.ports).forEach(([, value]) => {
      if (value.hasOwnProperty("unsubscribe")) {
        value.unsubscribe();
      }
    });
  }
}

customElements.define("elm-embed", ElmEmbed); // <elm-embed></elm-embed>
