import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-triangle-down')
export class ArtisticTriangleDown extends LitElement {
  static styles = css`
    div {
      width: 0;
      height: 0;
    }
  `;

  @property()
  widthLeft = '5rem';

  @property()
  widthRight = '5rem';

  @property()
  height = '10rem';

  @property()
  color = '#f0f';

  render() {
    const style = `
      border-left: ${this.widthLeft} solid transparent;
      border-right: ${this.widthRight} solid transparent;
      border-top: ${this.height} solid ${this.color};
    `;
    return html`<div style="${style}">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'artistic-triangle-down': ArtisticTriangleDown;
  }
}
