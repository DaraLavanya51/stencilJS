// src/components/footer.js
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>© 2024 My Micro Frontend App</p>
      </footer>
    `;
  }
}

customElements.define('app-footer', Footer);
