module.exports = {
	name: 'forcestop-death',
	description: "Stop de bot en yeet 'm het spraakkanaal uit. (unsafe)",
	async execute(client, message, args) {
		const voiceChannel = message.member.voice.channel;

		// check of ze in een channel zitten
		if (!voiceChannel)
			return message.channel.send('Je moet in een spraakkanaal zitten om dit commando uit te voeren.');

		// check permissions
		if (!message.author.id === process.env.DEVELOPER_USER_ID)
			return message.channel.send('Je hebt niet de rechten om dit commando uit te voeren.');

		await voiceChannel.leave();
		await message.channel.send('*De bot is geyeet into oblivion.* atleast it should be...');
	}
};
