import storage from "../data/storage";
import type Directory from "../interfaces/directory";
import pathManager from "./path";

export function getEntry(path: string): Directory | string | null {
  const pathSegments = pathManager.segment(path);

  let currentEntry: Directory | string = storage;

  for (const pathSegment of pathSegments) {
    if (
      typeof currentEntry !== "object" ||
      currentEntry === null ||
      !(pathSegment in currentEntry)
    ) {
      return null;
    }

    currentEntry = currentEntry[pathSegment];
  }

  return currentEntry;
}

export function createEntry(path: string, content: Directory | string): number {
  const parentPath = pathManager.branch(path);
  const parentDirectory = getEntry(parentPath) as Directory;

  if (parentDirectory === null) {
    return 1;
  }

  const name = pathManager.leaf(path);

  if (name in parentDirectory) {
    return 2;
  }

  parentDirectory[name] = content;
  return 0;
}

export function removeEntry(path: string): number {
  const parentPath = pathManager.branch(path);
  const parentDirectory = getEntry(parentPath) as Directory;

  if (parentDirectory === null) {
    return 1;
  }

  const entryName = pathManager.leaf(path);

  if (!(entryName in parentDirectory)) {
    return 2;
  }

  delete parentDirectory[entryName];
  return 0;
}

export function editFile(path: string, content: string): number {
  const parentPath = pathManager.branch(path);
  const parentDirectory = getEntry(parentPath) as Directory;

  if (parentDirectory === null) {
    return 1;
  }

  const fileName = pathManager.leaf(path);

  if (!(fileName in parentDirectory)) {
    return 2;
  }

  parentDirectory[fileName] = content;
  return 0;
}

export default {
  getEntry,
  createEntry,
  removeEntry,
  editFile,
};
