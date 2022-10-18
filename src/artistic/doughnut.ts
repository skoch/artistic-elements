import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-doughnut')
export class ArtisticDoughnut extends LitElement {
  static styles = css`
    div {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  @property()
  diameter = 10;

  @property()
  lineWidth = 10;

  @property()
  color = '#f0f';

  @property()
  top = '0';

  @property()
  left = '0';

  render() {
    const size = this.diameter - this.lineWidth * 2;
    const style = `
      width: ${size}rem;
      height: ${size}rem;
      border: solid ${this.lineWidth}rem ${this.color};
      ${this.top !== '0' || this.left !== '0' ? 'position: absolute;' : ''}
      ${this.top !== '0' ? `top: ${this.top};` : ''}
      ${this.left !== '0' ? `left: ${this.left};` : ''}
    `;
    return html`<div style="${style}">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'artistic-doughnut': ArtisticDoughnut;
  }
}
