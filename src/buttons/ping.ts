import { Button } from "../types";
import { getNameFromPath } from "../util";

const button: Button = {
  name: getNameFromPath(__filename),
  async execute(interaction, data) {
    await interaction.reply(data);
  },
};

export default button;
