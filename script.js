import { LitElement, html, css, property } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('tally-counter')
class TallyCounter extends LitElement {
    @property({ type: Number }) count = 0;
    @property({ type: Boolean }) minReached = false;
    @property({ type: Boolean }) maxReached = false;

    static styles = css`
        .counter {
            text-align: center;
        }
        .value {
            font-size: 2em;
        }
    `;

    constructor() {
        super();
        this.updateState();
    }

    decrement() {
        if (this.count > 0) {
            this.count -= 1;
            this.updateState();
        }
    }

    increment() {
        if (this.count < 15) {
            this.count += 1;
            this.updateState();
        }
    }

    updateState() {
        this.minReached = this.count === 0;
        this.maxReached = this.count === 15; // Update this to your max limit
    }

    render() {
        return html`
            <div class="counter">
                <button @click=${this.decrement} ?disabled=${this.minReached}>-</button>
                <span class="value">${this.count}</span>
                <button @click=${this.increment} ?disabled=${this.maxReached}>+</button>
            </div>
        `;
    }
}

