const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'help',
	description: "Help",
	async execute(client, message) {
		const embed = new MessageEmbed()
		  .setColor('#0099ff')
		  .setTitle('BerenQuote Help')
		  .setDescription(
		  	'Onderstaande commando\'s worden uitgevoerd met de **prefix -**\n' +
		  	'De blokhaken zoals [deze] staan voor een argument, de haken moet je niet typen.\n\n' +
		  	'**b** of **quote** - Voor een geweldige Berenquote.\n' +
		  	'**tmm**, **tmm [getal 1 - 26]** of **tmm [r]** - Voor een random genre vanuit Tycho\'s muziek maand.\n' +
		  	'**play [youtube link]**, **skip** of **stop** - Youtube muziek bot besturen.\n' +
		  	'**speak** of **say** - Berichten versturen als @Chippie. (Dit kan alleen de developer doen aka Jordey)\n' +
		  	'**help** - Wat denk je zelf...'
		  )
		  .setFooter('Heb je een idee of toevoeging voor de bot? laat het Jordey weten.');

		  message.channel.send(embed);
	}
};