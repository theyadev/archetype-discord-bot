import { config } from "dotenv";
import { Client, Intents } from "discord.js";
import { getCommands } from "./commands";
import { refreshSlashCommands } from "./refresh";

config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commands = getCommands();

client.on("ready", async () => {
  console.log(`Logged in as ${client.user?.tag}!`);

  // Refresh commands on every guilds
  const guilds = await client.guilds.fetch();

  for (const [id, guild] of guilds) {
    refreshSlashCommands(id);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = commands.find((e) => e.name == interaction.commandName);

  if (command) {
    console.log(command);
    
    command.execute(interaction);
  }
});

client.login(DISCORD_TOKEN);
