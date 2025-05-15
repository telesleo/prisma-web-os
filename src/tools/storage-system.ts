import storage from "../data/storage";
import type Directory from "../interfaces/directory";

export function getEntry(path: string) {
  const pathSegments = path.split("/");

  let currentEntry: Directory | string = storage;

  for (let index = 0; index < pathSegments.length; index++) {
    const pathSegment = pathSegments[index];

    if (typeof currentEntry === "string") {
      return null;
    }

    if (!(pathSegment in currentEntry)) {
      return null;
    }

    currentEntry = currentEntry[pathSegment];
  }

  return currentEntry;
}

export default {
  getEntry,
};
