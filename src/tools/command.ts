import type Command from "../interfaces/command";
import type CommandResult from "../interfaces/command-result";

function parseInput(input: string): string[] {
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

function getCommand(input: string): Command {
  const commandElements = parseInput(input) as string[];

  const command = { _: [] } as Command;

  for (let index = 0; index < commandElements.length; index++) {
    const commandElement: string = commandElements[index];

    if (commandElement.startsWith("-")) {
      index++;
      if (index < commandElements.length) {
        command[commandElement.substring(1)] = commandElements[index];
      }
      continue;
    }

    command._.push(commandElement);
  }

  return command;
}

export default function runCommand(input: string): CommandResult {
  const command = getCommand(input);

  const commandKey = command._[0] || "";

  const result = { output: "", effect: "" } as CommandResult;

  if (!commandKey) {
    return result;
  }

  switch (commandKey) {
    case "clear":
      result.effect = "clear";
      break;
    default:
      result.output = `command "${commandKey}" does not exist`;
      break;
  }

  return result;
}
