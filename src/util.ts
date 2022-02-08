import { sep } from "path";
import { readdirSync } from "fs";

export function getNameFromPath(filename: string) {
  return filename.slice(filename.lastIndexOf(sep) + 1, -3);
}

export function fetchFiles<T>(directory_path: string) {
  let file_names = readdirSync(directory_path);

  // Remove index.*
  file_names = file_names.filter(
    (file_name) => file_name.split(".")[0] != "index"
  );

  // Add every files default to a list
  const files: T[] = [];

  for (const file_name of file_names) {
    const file_path = directory_path + "/" + file_name;
    const file: T = require(file_path).default;

    files.push(file);
  }

  return files;
}
