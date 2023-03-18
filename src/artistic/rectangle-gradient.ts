import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-rectangle-gradient')
export class ArtisticRectangleGradient extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
    div {
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
  angle = '0deg';

  @property()
  color = '#f0f';

  @property()
  color2 = '#0f0';

  @property()
  top = '0';

  @property()
  left = '0';

  @property()
  align = 'initial';

  @property()
  'border-radius' = '0';

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
      align-self: ${this.align};
      ${this.top !== '0' || this.left !== '0' ? 'position: absolute;' : ''}
      ${this.top !== '0' ? `top: ${this.top};` : ''}
      ${this.left !== '0' ? `left: ${this.left};` : ''}
      ${
        this['border-radius'] !== '0'
          ? `border-radius: ${this['border-radius']};`
          : ''
      }
    `;

    return html`<div style="${style}">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'artistic-rectangle-gradient': ArtisticRectangleGradient;
  }
}
