import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-circular')
export class ArtisticCircular extends LitElement {
  static styles = css`
    div {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  @property()
  width = '10rem';

  @property()
  height = '10rem';

  @property()
  color = '#f0f';

  render() {
    const style = `
      width: ${this.width};
      height: ${this.height};
      background: ${this.color};
    `;
    return html`<div style="${style}">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'artistic-circular': ArtisticCircular;
  }
}
