import { css, html, LitElement, type PropertyValues } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import runCommand from "../tools/command";
import type Terminal from "../interfaces/terminal";

@customElement("os-terminal")
export class TerminalComponent extends LitElement {
  @state()
  private input: string = "";
  @state()
  private logs: string = "";

  @query("#input") inputElement!: HTMLInputElement;

  gray(input: string) {
    return `<span class="gray">${input}</span>`;
  }

  write(text: string, isInput: boolean = false) {
    this.logs =
      this.logs +
      (this.logs !== "" ? "\n" : "") +
      (isInput ? text : this.gray(text));
  }

  clear() {
    this.logs = "";
  }

  run() {
    this.write(this.input, true);

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
    return html`
      <div id="terminal" @click=${this.handleFocus}>
        <p class="log" .innerHTML=${this.logs}></p>
        <input
          id="input"
          .value="${this.input}"
          @input=${this.handleInputChange}
          @keydown=${this.handleInputKeyDown}
        />
      </div>
    `;
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

    .log {
      margin: 0;
      height: fit-content;
      white-space: pre;
      color: var(--white);
    }

    #input {
      width: 100%;
      border: 0;
      outline: 0;
      padding: 0;
    }

    .gray {
      color: var(--gray);
    }
  `;
}
