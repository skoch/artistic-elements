import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-triangle-square')
export class ArtisticTriangleSquare extends LitElement {
  static styles = css`
    div {
      width: 0;
      height: 0;
    }
  `;

  @property()
  width = 10;

  @property()
  borderStyle = 'solid';

  @property()
  topColor = '#f0f';

  @property()
  rightColor = '#0f0';

  @property()
  bottomColor = '#ff0';

  @property()
  leftColor = '#00f';

  render() {
    const style = `
      border-width: ${this.width / 2}rem;
      border-style: ${this.borderStyle};
      border-top-color: ${this.topColor};
      border-right-color: ${this.rightColor};
      border-bottom-color: ${this.bottomColor};
      border-left-color: ${this.leftColor};
    `;
    return html`<div style="${style}">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'artistic-triangle-square': ArtisticTriangleSquare;
  }
}
