import storage from "../data/storage";
import type Directory from "../interfaces/directory";
import { parsePath } from "./path";

export function getEntry(path: string): Directory | string | null {
  const parsedPath = parsePath(path);

  const pathSegments = parsedPath ? parsedPath.split("/") : [];

  let currentEntry: Directory | string = storage;

  for (let index = 0; index < pathSegments.length; index++) {
    const pathSegment = pathSegments[index];

    currentEntry = currentEntry[pathSegment];

    if (typeof currentEntry === "string") {
      break;
    }
  }

  return currentEntry;
}

export default {
  getEntry,
};
