const storage = {
  commands: {
    help: `(function (commandInvokation, terminal, storageManager) {
  const commandKey = commandInvokation.args[0] || "";
  const commandFile = storageManager.getEntry("/commands/" + commandKey);

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

usage: help [command-key]
  [command-key] the command for the documentation

examples:
  input: help echo
  output: output the given arguments to the terminal...
`,
    echo: `(function (commandInvokation, terminal) {
  const output = commandInvokation.args.join(" ");
  terminal.write(output);
});

# DOC
output the given arguments to the terminal

usage: echo [arguments...]
  [arguments...] arguments to be outputed

examples:
  input: echo "Hello, World!"
  output: Hello, World!
`,
    clear: `(function (commandInvokation, terminal) {
  terminal.clear();
});

# DOC
remove all logs from the terminal

usage: clear
`,
    peek: `(async function (commandInvokation, terminal, storageManager, pathManager) {
  const relativePath = commandInvokation.args[0] || "./";
  const path = pathManager.resolve(terminal.getPath(), relativePath);
  const file = storageManager.getEntry(path);
  let output = file;
  if (typeof(file) === "object") {
    output = Object.keys(file).join(" ");
  }
  terminal.write(output);
});

# DOC
list entries of a directory or show the contents of a file

usage: peek [path]
  [path] path of the entry being shown

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

usage: path

examples:
  input: path
  output: /files/other-dir
`,
    go: `(function (commandInvokation, terminal, storageManager, pathManager, errorManager) {
  const relativePath = commandInvokation.args[0] || "./";
  const path = pathManager.resolve(terminal.getPath(), relativePath);

  const entry = storageManager.getEntry(path);

  if (entry === null) {
    terminal.write(errorManager.invalidEntry(path));
    return;
  }

  if (typeof entry !== "object") {
    terminal.write(errorManager.notADirectory(path));
    return;
  }

  terminal.setPath(path);
});

# DOC
change the current path of the terminal

usage: go [path]
  [path]: new working path of the terminal

examples:
  input: go /files
`,
    dir: `(function (commandInvokation, terminal, storageManager, pathManager, errorManager) {
  const path = pathManager.resolve(terminal.getPath(), commandInvokation.args[0] || "");

  const response = storageManager.createEntry(path, {});

  const errorMessage = {
    1: errorManager.invalidEntry(path),
    2: errorManager.entryAlreadyExists(path),
  }[response] || "";

  if (errorMessage) {
    terminal.write(errorMessage);
    return;
  }
})

# DOC
create a new directory

usage: dir [path]
  [path] path of the directory being created

examples:
  input: dir /files/new-dir
`,
    file: `(function (commandInvokation, terminal, storageManager, pathManager) {
  const path = pathManager.resolve(terminal.getPath(), commandInvokation.args[0] || "");
  const content = commandInvokation.args[1] || "";

  const response = storageManager.createEntry(path, content);

  const errorMessage = {
    1: errorManager.invalidEntry(path),
    2: errorManager.entryAlreadyExists(path),
  }[response] || "";

  if (errorMessage) {
    terminal.write(errorMessage);
    return;
  }
})

# DOC
create a new file

usage: file [path] [content]
  [path] path of the file being created
  [content] the content of the file

examples:
  input: file /files/text "Text content"
`,
    rm: `(function (commandInvokation, terminal, storageManager, pathManager) {
  const relativePath = commandInvokation.args[0] || "./";
  const path = pathManager.resolve(terminal.getPath(), relativePath);

  const response = storageManager.removeEntry(path);

  const errorMessage = {
    1: errorManager.invalidEntry(path),
    2: errorManager.invalidEntry(path),
  }[response] || "";

  if (errorMessage) {
    terminal.write(errorMessage);
    return;
  }
})

# DOC
remove an entry

usage: rm [path]
  [path] path of the entry being removed

examples:
  input: file /files/text "Text content"
`,
    edit: `(function (commandInvokation, terminal, storageManager, pathManager) {
  const relativePath = commandInvokation.args[0] || "./";
  const content = commandInvokation.args[1] || "";

  const path = pathManager.resolve(terminal.getPath(), relativePath);

  const response = storageManager.editFile(path, content);

  const errorMessage = {
    1: errorManager.invalidEntry(path),
    2: errorManager.invalidEntry(path),
  }[response] || "";

  if (errorMessage) {
    terminal.write(errorMessage);
    return;
  }
})

# DOC

edit a file

usage: edit [path] [content]
  [path] path of the file being edited
  [content] the new content of the file

examples:
  edit /files/text "New content"
`,
  },
};

export default storage;
