import styles from "../style.css?url";
import { twMerge } from "tailwind-merge";
const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="${styles}" />
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
    wrapper.dataset.active = this.dataset.active || false;
    wrapper.setAttribute(
      "class",
      twMerge(wrapper.getAttribute("class"), this.getAttribute("class")),
    );
  }
}

customElements.define("card-c", Card);
