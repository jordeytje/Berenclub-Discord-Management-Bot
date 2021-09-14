const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

require('dotenv').config();

module.exports = {
	name: 'p',
	description: 'Voegt de bot toe en speelt Youtube af',
	async execute(client, message, args) {
		const voiceChannel = message.member.voice.channel;

		// check of ze in een channel zitten
		if (!voiceChannel)
			return message.channel.send('Je moet in een spraakkanaal zitten om dit commando uit te voeren.');

		if (!message.member.roles.cache.has(process.env.ROLE_ID_TEST))
			return message.channel.send('Je hebt niet de rechten om dit commando uit te voeren.');

		// check of een argument wordt meegegeven
		if (!args.length) {
			return message.channel.send('You had one job. Now suffer the consequences. Much love - Rick');
		}

		// keywords gebaseerd op URL
		const validURL = (str) => {
			var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
			if (!regex.test(str)) {
				return false;
			} else {
				return true;
			}
		};

		if (validURL(args[0])) {
			const connection = await voiceChannel.join();
			const stream = ytdl(args[0], { filter: 'audioonly' });

			connection.play(stream, { seek: 0, volume: 1 }).on('finish', () => {
				voiceChannel.leave();
			});

			await message.reply(`Aan het genieten van 't **linkje van ${message.author}**`);

			return;
		}

		// keywords niet gebaseerd op URL
		const connection = await voiceChannel.join();

		const videoFinder = async (query) => {
			const videoResult = await ytSearch(query);

			return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
		};

		const video = await videoFinder(args.join(' '));

		if (video) {
			const stream = ytdl(video.url, { filter: 'audioonly' });
			connection.play(stream, { seek: 0, volume: 1 }).on('finish', () => {
				voiceChannel.leave();
			});

			await message.reply(`Aan het genieten van **${video.title}**`);
		} else {
			message.channel.send('Niks gevonden');
		}
	}
};
