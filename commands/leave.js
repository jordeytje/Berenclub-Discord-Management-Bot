module.exports = {
	name: 'leave',
	description: "Stop de bot en yeet 'm het spraakkanaal uit.",
	async execute(client, message, args) {
		const voiceChannel = message.member.voice.channel;

		// check of ze in een channel zitten
		if (!voiceChannel)
			return message.channel.send('Je moet in een spraakkanaal zitten om dit commando uit te voeren.');

		// check permissions
		if (!message.member.roles.cache.has(process.env.ROLE_ID_TEST))
			return message.channel.send('Je hebt niet de rechten om dit commando uit te voeren.');

		await voiceChannel.leave();
		await message.channel.send('*De bot is geyeet into oblivion.*');
	}
};
