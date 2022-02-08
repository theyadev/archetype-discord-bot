import { MessageActionRow, MessageButton } from "discord.js";

import { Command } from "../types";
import { getNameFromPath } from "../util";

const command: Command = {
  name: getNameFromPath(__filename),
  description: "Replies with Pong!",
  async execute(interaction) {
    // Define a Row including 3 buttons
    /**
     * A reply can have a maxium of 5 rows and rows can have a maximum of 5 buttons
     */

    const buttons = [];

    for (let i = 1; i < 4; i++) {
      const button = new MessageButton()
        .setCustomId(`Ping ${i}:ping`)
        .setLabel(i.toString())
        .setStyle("PRIMARY");

      buttons.push(button);
    }
    const row = new MessageActionRow().addComponents(buttons);

    await interaction.reply({
      content: "Pong!",
      components: [row],
    });
  },
};

export default command;
