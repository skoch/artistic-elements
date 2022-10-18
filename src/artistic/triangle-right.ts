import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-triangle-right')
export class ArtisticTriangleRight extends LitElement {
  static styles = css`
    div {
      width: 0;
      height: 0;
    }
  `;

  @property()
  widthTop = '10rem';

  @property()
  widthBottom = '10rem';

  @property()
  width = '20rem';

  @property()
  color = '#f0f';

  render() {
    const style = `
      border-top: ${this.widthTop} solid transparent;
      border-left: ${this.width} solid ${this.color};
      border-bottom: ${this.widthBottom} solid transparent;
    `;
    return html`<div style="${style}">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'artistic-triangle-right': ArtisticTriangleRight;
  }
}
