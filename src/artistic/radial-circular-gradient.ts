import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('artistic-radial-circular-gradient')
export class ArtisticRadialCircularGradient extends LitElement {
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
  colors = '["#f0f", "#ff0"]';

  @property()
  stops = '[0, 1]';

  render() {
    const colorsArr = JSON.parse(this.colors);
    const stopsArr = JSON.parse(this.stops);
    const colors =
      colorsArr.length !== stopsArr.length
        ? `${colorsArr[0]} 0, ${colorsArr[1]} 100%`
        : colorsArr
            .map((c: string, i: number) => `${c} ${stopsArr[i] * 100}%`)
            .join(', ');
    const style = `
      width: ${this.width};
      height: ${this.height};
      background: radial-gradient(circle at center, ${colors})
    `;
    return html`<div style="${style}">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'artistic-radial-circular-gradient': ArtisticRadialCircularGradient;
  }
}
