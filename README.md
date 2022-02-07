# Installation
- Clone the repository
- Copy the `.env.example` and rename the copy to `.env`
- Edit the `.env` with your `Discord bot token` and `Discord bot client id`
- Start create your commands !
## How to create a command ?
- Create a file in `/src/commands` named with the name of your command (ex: `ping.ts`)
- Copy and paste the template below into the file
```js
import { Command } from ".";
import { getNameFromPath } from "../util";

const command: Command = {
  name: getNameFromPath(__filename),
  description: "Your awesome description !",
  async execute(interaction) {
    // Do what you want here
  },
};

export default command;
```
- Make your awesome command !

# Running
### Quick Start
- Run `npm run dev-start`
### Or
- Build the bot with `npm run build` then start it with `npm run start`


# Todo
- Find the way to update commands on every servers
