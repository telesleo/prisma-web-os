export function invalidEntry(path: string) {
  return `entry "${path}" is not valid`;
}

export function entryAlreadyExists(path: string) {
  return `entry "${path}" already exists`;
}

export function notADirectory(path: string) {
  return `entry "${path}" is not a directory`;
}

export default {
  invalidEntry,
  entryAlreadyExists,
  notADirectory,
};
