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

  @property({ type: Array })
  colors = ['#f0f', '#ff0'];

  @property({ type: Array })
  stops = [0, 1];

  render() {
    const { colors, stops } = this;
    // set the background if we have the correct number of stops / colors
    // if not, use default values
    const style = `
      width: ${this.width};
      height: ${this.height};
      background: radial-gradient(circle at center, ${
        colors.length !== stops.length
          ? `${colors[0]} 0, ${colors[1]} 100%`
          : colors
              .map((c: string, i: number) => `${c} ${stops[i] * 100}%`)
              .join(', ')
      })
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
