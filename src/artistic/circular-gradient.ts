import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-circular-gradient')
export class ArtisticCircularGradient extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
    div {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
  `;

  @property()
  width = '10rem';

  @property()
  height = '10rem';

  @property()
  angle = '0deg';

  @property()
  color = '#f0f';

  @property()
  color2 = '#0f0';

  render() {
    const style = `
      width: ${this.width};
      height: ${this.height};
      background: linear-gradient(
        ${this.angle},
        ${this.color} 0%,
        ${this.color} 50%,
        ${this.color2} 50%,
        ${this.color2} 100%
      );
    `;
    return html`<div style="${style}">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'artistic-circular-gradient': ArtisticCircularGradient;
  }
}
