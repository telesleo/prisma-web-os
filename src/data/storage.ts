const storage = {
  commands: {
    help: `(function (commandInvokation, terminal, storage) {
  const commandKey = commandInvokation.args.find((arg) => !arg.startsWith("-")) || "";
  const commandFile = storage.getEntry("/commands/" + commandKey);

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
show the documentation of a given command
`,
    echo: `(function (commandInvokation, terminal) {
  const output = commandInvokation.args.join(" ");
  terminal.write(output);
});

# DOC
output the given arguments as a single string to the terminal

examples:

input: echo "Hello, World!"
output: Hello, World!
`,
    clear: `(function (commandInvokation, terminal) {
  terminal.clear();
});

# DOC
remove all logs from the terminal
`,
    peek: `(async function (commandInvokation, terminal, storage, tools) {
  const path = tools.resolvePath(terminal.getPath(), commandInvokation.args[0] || "");
  console.log(path);
  const file = storage.getEntry(path);
  let output = file;
  if (typeof(file) === "object") {
    output = Object.keys(file).join(" ");
  }
  terminal.write(output);
});

# DOC
list entries of a directory or show the contents of a file

examples:

input: peek files
output: hello-world file-one file-two

input: peek files/hello-world
output: Hello, World!
`,
    path: `(function (commandInvokation, terminal) {
  const path = terminal.getPath();
  terminal.write(path);
});
  
# DOC
show the current path of the terminal
`,
    go: `(function (commandInvokation, terminal, storage, tools) {
  const pathArg = commandInvokation.args.find((arg) => !arg.startsWith("-")) || "";

  const path = tools.resolvePath(terminal.getPath(), pathArg);

  console.log(path);

  terminal.setPath(path);
});

# DOC
change the current path of the terminal
`,
  },
};

export default storage;
