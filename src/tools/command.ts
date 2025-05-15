import type CommandInvokation from "../interfaces/command-invocation";
import type Terminal from "../interfaces/terminal";
import storageSystem from "./storage-system";

function parseCommandInput(input: string): string[] {
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

function getCommandInvokation(input: string): CommandInvokation {
  const commandElements = parseCommandInput(input) as string[];

  const args: string[] = [];
  const options: { [key: string]: string } = {};

  for (let index = 0; index < commandElements.length; index++) {
    const commandElement: string = commandElements[index];

    if (commandElement.startsWith("-")) {
      index++;
      if (index < commandElements.length) {
        options[commandElement.substring(1)] = commandElements[index];
      }
      continue;
    }

    args.push(commandElement);
  }

  return { key: args[0], args: args.slice(1), options };
}

export default function runCommand(input: string, terminal: Terminal) {
  const commandInvokation = getCommandInvokation(input);

  const commandFile = storageSystem.getEntry(
    `commands/${commandInvokation.key}`
  ) as string;

  if (commandFile === null) {
    return {
      output: `"${commandInvokation.key}" is not a command`,
    };
  }

  const runFunction = eval(commandFile);

  runFunction(commandInvokation, terminal, storageSystem);
}
