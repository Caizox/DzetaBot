require("dotenv").config();

const Discord = require("discord.js");

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

Client.login(process.env.TOKEN);

const prefix = "/";

Client.on("ready", () => {
    console.log("Bot Activé Avec Succès !");
});

Client.on("guildMemberAdd", member => {
    console.log("Un Membre est Arrivé .");
    Client.channels.cache.get("921673272117035078").send("<@" + member.id + "> ** Est Arrivé Sur Le Serveur !!!**");
});

Client.on("guildMemberRemove", member => {
    console.log("Un Membre est Parti .");
    Client.channels.cache.get("923201231252504596").send("<@" + member.id + "> ** Est Parti Du Serveur !!!**");
});

Client.on("messageCreate", message => {
    if(message.author.bot) return;
    // ping
    if(message.content === prefix + "ping"){
        message.reply("Pong ! 🏓");
    }
});

Client.on("messageCreate", message => {
        if(message.author.bot) return;
        // auteur
        if(message.content === prefix + "auteur"){
            message.channel.send("**L'auteur De Ce Bot Est *__Caizøx ツ__* , Le Chef De La Dzeta !**");
        }
});

Client.on("messageCreate", message => {
    if(message.author.bot) return;
    // help
    if(message.content === prefix + "fiusefbushfbsuhfusqqdzqdq"){
        const embed = new Discord.MessageEmbed()
    .setTitle("⊱ ──── Règlement ──── ⊰")
    .setColor("#ff0000")
    .setAuthor("Caizøx ツ","https://cdn.discordapp.com/avatars/567363720012103680/4869170ee50b7a449b029edadfb62dca.png?size=1024")
    .setDescription("**Tu Verras Le Règlement Du Serveur En Écrivant La Commande /accepter Dans Le Chat , Tu Les Acceptera Et Tu Verras le Serveur En Entier , Bon Jeu Et Bonne Éxperience !!!**")
    .setTimestamp()
    .setFooter("DzetaBot © Possédé Par Caizøx ツ", "https://cdn.discordapp.com/avatars/567363720012103680/4869170ee50b7a449b029edadfb62dca.png?size=1024");
    message.channel.send({ embeds: [embed]});
    }
});

Client.on("messageCreate", message => {
    if(message.content === prefix + "accepter") {
    message.member.roles.add("921519241402933310")
    message.delete()
    }
});


Client.on("messageCreate", message => {
    if(message.author.bot) return;
    // help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
    .setTitle("⊱ ──── Commandes ──── ⊰")
    .setColor("#0099ff")
    .setURL("https://discord.js.org/")
    .setAuthor("Caizøx ツ","https://cdn.discordapp.com/avatars/567363720012103680/4869170ee50b7a449b029edadfb62dca.png?size=1024")
    .setDescription("**Vous Y Trouverez La Liste Des Commandes Du Bot**")
    .setThumbnail("https://cdn.dribbble.com/users/5234185/screenshots/11242585/media/904f9ccee3c521a599c7998c3376e09c.png?compress=1&resize=400x300")
    .addField("__**/help**__", "Affiche La Liste Des Commandes Disponibles !")
    .addField("__**/ping**__", "Renvoie Pong !")
    .addField("__**/auteur**__", "Envoie Le Nom De L'auteur Du Bot Par Message !")
    .setTimestamp()
    .setFooter("DzetaBot © Possédé Par Caizøx ツ", "https://cdn.discordapp.com/avatars/567363720012103680/4869170ee50b7a449b029edadfb62dca.png?size=1024");
    message.channel.send({ embeds: [embed]});
    }
});