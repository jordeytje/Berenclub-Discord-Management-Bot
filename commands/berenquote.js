const { MessageEmbed } = require("discord.js");
const quoteData = require('../berenclub_citaten_21_11_2021.json');

module.exports = {
	name: 'b',
	aliases: [ 'b quote', 'quote'],
	description: "Berenquote",
	async execute(client, message, cmd, args) {
		const arr = quoteData[`messages`];
    const randomQuote = arr[Math.floor(Math.random()*arr.length)];

    const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('BerenQuote')
      .setDescription(`${randomQuote['content']}`)
      .setFooter(`Opgeslagen door ${randomQuote['author']['name']}`, `${randomQuote['author']['avatarUrl']}`);

      message.channel.send(embed);
	}
};