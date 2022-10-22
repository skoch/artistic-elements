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
  heightTop = '5rem';

  @property()
  heightBottom = '5rem';

  @property()
  width = '10rem';

  @property()
  color = '#f0f';

  render() {
    const style = `
      border-top: ${this.heightTop} solid transparent;
      border-left: ${this.width} solid ${this.color};
      border-bottom: ${this.heightBottom} solid transparent;
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
