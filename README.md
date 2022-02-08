# Installation

- Clone the repository
- Run `npm install`
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

## How to create a command ?

- TODO

- Template

```js
import { Button } from "../types";
import { getNameFromPath } from "../util";

const button: Button = {
  name: getNameFromPath(__filename),
  async execute(interaction, data) {
    // Do what you want here
  },
};

export default button;
```

# Running

### Quick Start

- Run `npm run dev-start`

### Or

- Build the bot with `npm run build` then start it with `npm run start`
