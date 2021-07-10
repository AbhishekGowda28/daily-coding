class MyComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<h1 class="hello">Hello world</h1>`;
    }
  }
  
  customElements.define('my-component', MyComponent);

  console.log("Page loaded");