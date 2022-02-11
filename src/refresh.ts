import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { config } from "dotenv";
import { commands } from "./commands";

config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;

export async function refreshSlashCommands(guild_id: string) {
  if (!CLIENT_ID || !guild_id || !DISCORD_TOKEN) throw new Error("Erreur");

  const rest = new REST({ version: "9" }).setToken(DISCORD_TOKEN);

  const commands_data = commands.map((c) => {
    return c.command_data;
  });

  const guild_commands = Routes.applicationGuildCommands(CLIENT_ID, guild_id);
  const options = {
    body: commands_data,
  };

  try {
    await rest.put(guild_commands, options);
  } catch (error) {
    console.error(error);
  }
}
