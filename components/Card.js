import { twMerge } from "../node_modules/tailwind-merge/dist/bundle-mjs.mjs";
const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="/main.css" />
  <div id="wrapper" class="card">
    <slot></slot>
  </div>
`;

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const wrapper = this.shadowRoot.getElementById("wrapper");
    wrapper.setAttribute(
      "class",
      twMerge(wrapper.getAttribute("class"), this.getAttribute("class")),
    );
  }
}

customElements.define("card-c", Card);
