import { css, html, LitElement, type PropertyValues } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import runCommand from "../tools/command";
import type TerminalLogLine from "../interfaces/terminal-log-line";

@customElement("os-terminal")
export class Terminal extends LitElement {
  @state()
  private input: string = "";
  @state()
  private log: TerminalLogLine[] = [];

  @query("#input") inputElement!: HTMLInputElement;

  addToLog(text: string, isInput: boolean) {
    this.log = [...this.log, { text, isInput }];
  }

  clearLog() {
    this.log = [];
  }

  run() {
    this.addToLog(this.input, true);

    const result = runCommand(this.input);

    switch (result.effect) {
      case "clear":
        this.clearLog();
    }

    if (result.output) {
      this.addToLog(result.output, false);
    }

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
        ${this.log.map(
          (logLine) =>
            html`
              <p class="${logLine.isInput ? "log-input" : "log-output"}">
                ${logLine.text || " "}
              </p>
            `
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
