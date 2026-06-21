const basePath = process.env.NODE_ENV === "production" ? "/mikolaj-chmielewski-portfolio" : "";

export function asset(path: string): string {
  if (path.startsWith("/")) {
    return `${basePath}${path}`;
  }
  return `${basePath}/${path}`;
}
