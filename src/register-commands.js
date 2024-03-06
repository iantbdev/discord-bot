require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "fitpac",
    description: "Replies with a guide on how to use the bot.",
  },
  {
    name: "quote",
    description:
      "Replies with a random quote of your favorite duo (and also their friends/family!) 💙🤎.",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });
    console.log("Slash commands were registered.");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
