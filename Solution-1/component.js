customElements.define('edit-param',
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({mode: 'open'});
      const form = document.createElement('form');
      const input = document.createElement('input');
      const style = document.createElement('style');
      style.textContent = 'input { background-color: #eef; padding: 0 2px }';

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(form);
      shadowRoot.appendChild(input);

      input.value = this.textContent;

      form.appendChild(input);
      input.style.display = 'inline-block';
      input.style.width = '200px';

      input.setAttribute('id', this.parentElement.id);
      input.setAttribute('required', 'required');
      this.style.display = 'inline-block';

      this.addEventListener('click', () => {
        form.style.display = 'inline-block';
        input.focus();
        input.setSelectionRange(0, input.value.length)
      });

      input.addEventListener('blur', updateDisplay);

      function updateDisplay() {
        input.style.width = '200px';
        addParam(this.id, input.value);
      }
    }
  }
);