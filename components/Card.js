const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="/main.css" />
  <div class="flex flex-col shadow-card shadow-black/25 bg-yun-white rounded-lg p-6 justify-between h-full">
    <slot></slot>
  </div>
`;

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("card-c", Card);
