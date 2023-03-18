import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-rectangle')
export class ArtisticRectangle extends LitElement {
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
  color = '#f0f';

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
      background: ${this.color};
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
    'artistic-rectangle': ArtisticRectangle;
  }
}
