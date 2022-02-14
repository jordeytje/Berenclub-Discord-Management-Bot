module.exports = (Discord, client, message) => {
	const prefix = '-';
	const badNamesArray = ['jord', 'jordt', 'jort', 'jorde', 'jordei', 'jordie', 'jordieus', 'yord', 'yort', 'yordt', 'yordey', 'yordei', 'yordy', 'yordie'];

	if (!message.content.startsWith(prefix) || message.author.bot) {
    if (!message.content.toLowerCase().includes('jordey')) {
      for (let i = 0; i < badNamesArray.length; i++) {
			if (message.content.toLowerCase().includes(badNamesArray[i])) {
				  return message.channel.send(`${message.author} (you peasant). Je leert het echt nooit he, do you?`);
			  }
		  }
    }
		return;
	}

	const args = message.content.slice(prefix.length).split(/ +/);
	const cmd = args.shift().toLowerCase();

	const command = client.commands.get(cmd) || client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

 if (command) {
		message.delete();
		command.execute(client, message, cmd, args, Discord);
	}
};
