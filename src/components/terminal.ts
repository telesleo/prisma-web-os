import { css, html, LitElement, type PropertyValues } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import runCommand from "../tools/command";
import type TerminalLine from "../interfaces/terminal-line";
import type Terminal from "../interfaces/terminal";

@customElement("os-terminal")
export class TerminalComponent extends LitElement {
  @state()
  private input: string = "";
  @state()
  private lines: TerminalLine[] = [];

  @query("#input") inputElement!: HTMLInputElement;

  write(text: string, type: "input" | "output" = "output") {
    this.lines = [...this.lines, { text, type }];
  }

  clear() {
    this.lines = [];
  }

  run() {
    this.write(this.input, "input");

    runCommand(this.input, {
      write: this.write.bind(this),
      clear: this.clear.bind(this),
    } as Terminal);

    this.input = "";
  }

  handleInputChange(event: { target: HTMLInputElement }) {
    this.input = event.target.value;
  }

  handleInputKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.run();
    }
  }

  handleFocus() {
    this.inputElement.focus();
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.inputElement.focus();
  }

  render() {
    return html`<div id="terminal" @click=${this.handleFocus}>
      <div id="log">
        ${this.lines.map(
          (line) => html` <p class="log-${line.type}">${line.text || " "}</p> `
        )}
      </div>
      <input
        id="input"
        .value="${this.input}"
        @input=${this.handleInputChange}
        @keydown=${this.handleInputKeyDown}
      />
    </div>`;
  }

  static styles = css`
    #terminal,
    #input {
      color: var(--white);
      background-color: var(--black);
      font-family: var(--font-family);
      font-size: var(--font-size);
    }

    #terminal {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: var(--padding);
    }

    .log-input,
    .log-output {
      margin: 0;
      height: fit-content;
      white-space: pre;
    }

    .log-input {
      color: var(--white);
    }

    .log-output {
      color: var(--gray);
    }

    #input {
      width: 100%;
      border: 0;
      outline: 0;
      padding: 0;
    }
  `;
}
