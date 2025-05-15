const storage = {
  commands: {
    echo: `(function (commandInvokation, terminal) {
  const output = commandInvokation.args.join(" ");
  terminal.write(output);
});`,
    clear: `(function (commandInvokation, terminal) {
  terminal.clear();
});`,
    peek: `(async function (commandInvokation, terminal, storageSystem) {
  const file = storageSystem.getEntry(commandInvokation.args[0]);
  terminal.write(file);
});`,
  },
};

export default storage;
