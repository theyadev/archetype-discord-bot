import { config } from "dotenv";
import { Client, Intents } from "discord.js";
import { commands } from "./commands";
import { buttons } from "./buttons";
import { refreshSlashCommands } from "./refresh";

config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", async () => {
  console.log(`Logged in as ${client.user?.tag}!`);

  // Refresh commands on every guilds
  const guilds = await client.guilds.fetch();

  const refresh_promises = [];

  for (const [id, guild] of guilds) {
    refresh_promises.push(refreshSlashCommands(id));
  }

  await Promise.all(refresh_promises);

  console.log("Slash commands refreshed !");
});

// Handle commands
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = commands.find(
    (e) => e.command_data.name == interaction.commandName
  );

  if (command) command.execute(interaction);
});

// Handle buttons
client.on("interactionCreate", (interaction) => {
  if (!interaction.isButton()) return;

  const [data, button_name] = interaction.customId.split(":");

  const button = buttons.find((e) => e.name == button_name);

  if (button) button.execute(interaction, data);
});

client.login(DISCORD_TOKEN);
