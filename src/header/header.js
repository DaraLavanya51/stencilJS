// src/components/header.js
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>My Micro Frontend App</h1>
      </header>
    `;
  }
}

customElements.define('app-header', Header);
