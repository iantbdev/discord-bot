require("dotenv").config();
const { Client, IntentsBitField, ActivityType } = require("discord.js");
const { quotes } = require("./quotes.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const pickRandom = (array) => array[Math.floor(Math.random() * array.length)];

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online! 🦾`);

  client.user.setActivity({
    name: "Pac",
    type: ActivityType.Streaming,
    url: "https://www.twitch.tv/peqitw",
  });
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  console.log(message.content);
  if (message.content === "!quote") {
    message.reply("Aqui é FITPAC PORRA");
  }
});
client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  console.log(interaction.commandName);

  if (interaction.commandName === "fitpac") {
    interaction.reply(
      "FitPac Warrior is a bot that replies with random FitPac/Hideduo quotes. Try the command /quote to test it out 🦾"
    );
  }
  if (interaction.commandName === "quote") {
    interaction.reply(pickRandom(quotes));
  }
});

client.login(process.env.TOKEN);
