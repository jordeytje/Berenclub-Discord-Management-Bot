const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'speak',
	description: "Praat als bot",
	async execute(client, message, cmd, args) {
    if (message.author.id === process.env.DEV_ID) {
      console.log(args);
      if (args[0] && args[1]) {
        let text = args.slice(1).join();
        console.log(text);
        text = text.replace(/,/g, ' ');

        const embed = new MessageEmbed()
          .setColor('#13ec9c')
          .setTitle(`${args[0]}`)
          .setDescription(`${text}`)
          .setTimestamp();

        message.channel.send(embed);
      }
    }
	}
};