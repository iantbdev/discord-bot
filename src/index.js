require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const quotes = [
  "I care a lot about you and I hope we continue to explore the world together.",
  "Words cannot express how thankful I am to have you as part of my family here on the island.",
  "I don't need any armor, you know? I have my hoodie, I have you, I have Ramón!",
  "That is something that I will remember all my life, that you trust me.",
  "You are kinda like mysterious too… I noticed, you know? You don’t talk much about your life, or about your goals. So it’s really nice for me to hear that from you– that you trust me.",
  "By the way Fit! You forgot this yesterday at my house.",
  "You risked your life just for a present for me, you’re so thoughtful  \n  I know you like your trident a lot, so I had to!",
  "If we get permission to live there... You know it’s a really big castle for just Ramón and I.  \n OOOOH You know, I would like also to share a room there!",
  "And I was wondering if I could get your blessing, since you’re very attached to Fit and Fit loves you a lot.",
  "You're a tough guy, you know? You're a tough guy... you're perfect, perfect!",
  "Dangerous? \n For me, not necessarily for you. \n Well, but if it is dangerous for you, it is also dangerous for me",
  "I’m going to ignore all the red flags, I’m colorblind",
  "Because... Gosto de você.",
  "So, Fit, I’m taking your spouse to the murder mystery arena if that’s okay, so see you later bro.",
  "I'm just a baby boy, and Ramon is a baby boy, and Tubbo is also a baby boy!  Fit, you are a big baby boy.",
  "You can call me Fitch if that… if that makes it easier",
  "I’m so sorry Fit! I’m so sorry! Guys, leave him alone! Fit, I’m sorry! Guys, stop! Fit!",
  "Your presence made me feel better \n *Laughs* My presence?",
  "Com carinho, Pac 🖤",
  "Wait Ramon, we are not just gay friendly, we ARE gay.",
  "Se algo acontecer com você eu vou até o inferno pra te salvar \n I would do the same for you Pac, I would do the same for you!",
  "I won't move if you don't move as well. I am not forcing you, I am just saying... I wanna stay close to you and Ramon as well.",
  "I missed you so much, Fit.",
  "A hug? Wait you guys didn't kiss after the date? That's weird",
  "You know…. me and Fit are dating, that's like the ultimate fofoca",
  "Just say no more, how much do you want Pac?",
  "Yeah, I like Pac",
  "Fit! Can I… can I kiss your forehead?",
  "I guess we've never really sat down and had this talk with Richas. Yeah, we are dating, Richas. Pac’s my boyfriend.",
  "How do I always know where Pac is?",
  "Olha se não são meus nenéns!",
  "Not that Vegetta's ass could ever replace you, Pac.",
  "I love when you speak Portuguese to me, speak Portuguese to me.",
  "Ah! I missed you Fit!",
  "But- it would, um... uh, how should I put this? ... um.. it would be like a date.",
  "I’m sorry for staring at you, it just kinda happens",
  "Admittedly, I have a lot of red flags. I have PTSD from end crystal explosions, and I would kill people and blow up their houses… A lot of red flags but I can change.",
  "A gente nunca morou junto, mas eu morava no coração dele e ele morava no meu, o que eu posso fazer?",
  "Do you want that I put you in bed and I can sing a lullaby- wait \n Ah, shit, babe/but hey, if you wanna put me in the bed, you gotta give me some of that Pierre's wine first \n OH WAIT WAIT",
  "Please refrain from trying to murder my Brazilian boyfriend, or consume his body parts. ‘Cause that’s just like, not cool, man.",
  "I’m working on myself. I’m working on myself. \n It’s all good Fit, it’s all good!",
  "Yours truly, Fit",
  "Fit: ❤️ \n Pactw: ❤️❤️",
  "He’s fucking lost it. My man has fucking lost it.",
  "Nothing lasts forever, Fit…",
  "B-But it’s a new me, Fit. It’s a new me. I’m a new, improved Pac– happier than ever. \n I want the old Pac back.",
  "I am not gonna kill Pac today, it doesn't matter how much points it will give us– I will not do it.",
  "Pac… I see how it is… I see how it is.",
  "Can I build my house near yours?  \n Oh I would be mad if you don’t",
  "What?! Pac got me a trident! Aw, he’s so thoughtful– so thoughtful! That’s so hype.",
  "/he loves you xD/ \n *laughs* Ramon… ahh, that’s good… Love is a strong word– we’ve only been dating for a month! The L-word is pretty quick",
  "Hello Big Daddy!",
  "Just feeling saudades.",
  "I would kiss, kill, and marry Fit.",
  "Eu gosto de você também.",
];

const pickRandom = (array) => array[Math.floor(Math.random() * array.length)];

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online! 🦾`);
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
