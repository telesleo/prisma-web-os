import type CommandInvokation from "../interfaces/command-invocation";
import type Terminal from "../interfaces/terminal";
import pathManager from "./path";
import storageManager from "./storage";
import errorManager from "./error";

function tokenize(input: string): string[] {
  const tokens: string[] = [];
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
        tokens.push(current);
        current = "";
      }
    } else {
      current += char;
    }
  }

  if (current) {
    tokens.push(current);
  }

  return tokens;
}

function parseCommand(commandInput: string): CommandInvokation {
  const tokens = tokenize(commandInput);

  return { key: tokens[0], args: tokens.slice(1) };
}

export default function runCommand(input: string, terminal: Terminal) {
  const commandInvokation = parseCommand(input);

  const commandFile = storageManager.getEntry(
    `/commands/${commandInvokation.key}`
  ) as string;

  if (commandFile === null) {
    terminal.write(`"${commandInvokation.key}" is not a command`);
    return;
  }

  const [code] = commandFile.split("\n# DOC\n");

  try {
    const run = eval(code);
    run(commandInvokation, terminal, storageManager, pathManager, errorManager);
  } catch (error) {
    console.error(error);
  }
}
