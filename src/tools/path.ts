export function parsePath(path: string) {
  return path.replace(/^\/|\/$/g, "");
}

export function resolvePath(base: string, relative: string): string {
  if (!base.endsWith("/")) base += "/";
  const resolved = new URL(relative, "file://" + base);
  return resolved.pathname;
}

export default { resolvePath };
