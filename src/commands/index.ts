import { CommandInteraction } from "discord.js";
import { readdirSync } from "fs";
import { resolve } from "path";

const DIRECTORY_PATH = resolve(__dirname, "./");

const file_names = readdirSync(DIRECTORY_PATH);

// Remove index.* to get commands
const command_names = file_names.filter(
  (file_name) => file_name.split(".")[0] != "index"
);

// Add every commands default to a list
const commands: Command[] = [];

for (const command_name of command_names) {
  const command_path = DIRECTORY_PATH + "/" + command_name;
  const command: Command = require(command_path).default;

  commands.push(command);
}

/**
 * @returns list of command formatted for refreshing guild commands
 */
export function getCommandsForRefresh() {
  const refresh_commands = commands.map((command) => {
    return {
      name: command.name,
      description: command.description,
    };
  });

  return refresh_commands;
}

/**
 * @returns list of command
 */
export function getCommands() {
  return commands;
}

export interface Command {
  name: string;
  description: string | null;
  execute: (interaction: CommandInteraction) => void;
}
