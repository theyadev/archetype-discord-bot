import type { ButtonInteraction, CommandInteraction } from "discord.js";
import type { SlashCommandBuilder } from "@discordjs/builders";
export interface Button {
  name: string;
  execute: (interaction: ButtonInteraction, data: string) => void;
}

export interface Command {
  command_data: Omit<
    SlashCommandBuilder,
    "addSubcommand" | "addSubcommandGroup"
  >;
  execute: (interaction: CommandInteraction) => void;
}
