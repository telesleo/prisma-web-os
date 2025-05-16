const storage = {
  commands: {
    help: `(function (commandInvokation, terminal, storage) {
  const commandKey = commandInvokation.args.find((arg) => !arg.startsWith("-")) || "";
  const commandFile = storage.getEntry("commands/" + commandKey);

  if (commandFile === null) {
    return;
  }

  if (!commandFile.includes("\\n# DOC\\n")) {
    return;
  }

  const [code, documentation] = commandFile.split("\\n# DOC\\n");

  terminal.write(documentation.trim());
});

# DOC
shows the documentation of a given command
`,
    echo: `(function (commandInvokation, terminal) {
  const output = commandInvokation.args.join(" ");
  terminal.write(output);
});

# DOC
outputs the given arguments as a single string to the terminal

EXAMPLES:

input: echo "Hello, World!"
output: Hello, World!
`,
    clear: `(function (commandInvokation, terminal) {
  terminal.clear();
});

# DOC
removes all logs from the terminal
`,
    peek: `(async function (commandInvokation, terminal, storage) {
  const file = storage.getEntry(commandInvokation.args[0]);
  let output = file;
  if (typeof(file) === "object") {
    output = Object.keys(file).join(" ");
  }
  terminal.write(output);
});

# DOC
lists entries of a directory or displays the contents of a file

echo [args...]

EXAMPLES:

input: peek files
output: hello-world file-one file-two

input: peek files/hello-world
output: Hello, World!
`,
  },
};

export default storage;
