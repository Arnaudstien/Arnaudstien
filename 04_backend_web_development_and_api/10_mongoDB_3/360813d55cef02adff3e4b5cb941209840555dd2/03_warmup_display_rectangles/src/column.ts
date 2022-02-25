export function column(numberOfLines: number, lineContent: string): string {
  let line = "";

  for (let i = 0; i < numberOfLines; i++) {
    line += lineContent + `\n`;
  }
  return line;
}
