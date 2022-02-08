import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { config } from "dotenv";
import { getCommandsForRefresh } from "./commands";

config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;

const commands = getCommandsForRefresh();

export async function refreshSlashCommands(guild_id: string) {
  if (!CLIENT_ID || !guild_id || !DISCORD_TOKEN) throw new Error("Erreur");

  const rest = new REST({ version: "9" }).setToken(DISCORD_TOKEN);

  try {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, guild_id), {
      body: commands,
    });
  } catch (error) {
    console.error(error);
  }
}
