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
  widthLeft = '10rem';

  @property()
  widthRight = '10rem';

  @property()
  height = '20rem';

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
