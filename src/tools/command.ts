import type CommandInvokation from "../interfaces/command-invocation";
import type Terminal from "../interfaces/terminal";
import storage from "./storage";

function segmentInput(input: string): string[] {
  const result: string[] = [];
  let inQuotes: boolean = false;
  let current: string = "";

  for (let index = 0; index < input.length; index++) {
    const char = input[index];

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === " " && !inQuotes) {
      if (current !== "") {
        result.push(current);
        current = "";
      }
    } else {
      current += char;
    }
  }

  if (current) {
    result.push(current);
  }

  return result;
}

function parseCommand(commandInput: string): CommandInvokation {
  const segments = segmentInput(commandInput);

  return { key: segments[0], args: segments.slice(1) };
}

export default function runCommand(input: string, terminal: Terminal) {
  const commandInvokation = parseCommand(input);

  const commandFile = storage.getEntry(
    `commands/${commandInvokation.key}`
  ) as string;

  if (commandFile === null) {
    terminal.write(`"${commandInvokation.key}" is not a command`);
    return;
  }

  const [code] = commandFile.split("\n# DOC\n");

  const run = eval(code);

  run(commandInvokation, terminal, storage);
}
