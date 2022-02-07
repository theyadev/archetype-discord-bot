import { config } from "dotenv";
import { Client, Intents } from "discord.js";
import { getCommands } from "./commands";

config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commands = getCommands();

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = commands.find((e) => e.name == interaction.commandName);

  if (command) {
    command.execute(interaction);
  }
});

client.login(DISCORD_TOKEN);
