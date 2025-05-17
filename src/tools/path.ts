export function parse(path: string) {
  return path.replace(/^\/|\/$/g, "");
}

export function segment(path: string): string[] {
  const parsedPath = parse(path);
  return parsedPath ? parsedPath.split("/") : [];
}

export function resolve(base: string, relative: string): string {
  if (!base.endsWith("/")) base += "/";
  const resolved = new URL(relative, "file://" + base);
  return resolved.pathname;
}

export function branch(path: string) {
  const pathSegments = segment(path);
  return pathSegments.slice(0, -1).join("/");
}

export function leaf(path: string) {
  const pathSegments = segment(path);
  return pathSegments[pathSegments.length - 1];
}

export default { parse, segment, resolve, branch, leaf };
