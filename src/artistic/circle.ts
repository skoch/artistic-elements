import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-circle')
export class ArtisticCircle extends LitElement {
  static styles = css`
    div {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  @property()
  size = '10rem';

  @property()
  color = '#f0f';

  render() {
    const style = `
      width: ${this.size};
      height: ${this.size};
      background: ${this.color};
    `;
    return html`<div style="${style}">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'artistic-circle': ArtisticCircle;
  }
}
