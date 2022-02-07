import { sep } from "path";

export function getNameFromPath(filename: string) {
  return filename.slice(filename.lastIndexOf(sep) + 1, -3);
}
