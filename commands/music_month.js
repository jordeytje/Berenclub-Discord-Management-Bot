const musicData = require('../musicData.json');

module.exports = {
	name: 'music',
	aliases: [ 'tmm'],
	description: "De Tycho muziek maand - December 2021",
	async execute(client, message, cmd, args) {
		const today = new Date();
    const day = parseInt(today.getDate());
    const month = today.toLocaleString('default', { month: 'long' });

		const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    const randomizeMusic = (input) => {
      const arr = musicData[`${alphabet[input]}`]
      let random = arr[Math.floor(Math.random()*arr.length)];

       message.channel.send(`${message.author} Jouw genre voor vandaag is: **${random}**.`);
    }

    if (args.length > 0) {
      args = parseInt(args[0]);

      if (args > 0 && args <= 26) {
          message.channel.send(`${message.author} Je hebt gekozen voor dag **${args}**. De dag met letter **${alphabet[args - 1]}** Vandaag ga jij luisteren naar...`);
          return randomizeMusic(args - 1);
      } else {
        message.channel.send(`${message.author} Je bent een incapabele ziel en het alfabet is maar 26 tekens lang. Omdat je geen normale argumenten mee kan geven krijg je de lijst van vandaag. Vandaag is het **${day} ${month}**. Vandaag is de letter **${alphabet[day]}** en ga je luisteren naar...`);
        return randomizeMusic(day);
      }

    } else {
      if (day > 0 && day <= 26) {
        message.channel.send(`${message.author} Vandaag is het **${day} ${month}**. Vandaag is de letter **${alphabet[day]}** en ga je luisteren naar...`);
        return randomizeMusic(day - 1);
      } else {
        message.channel.send(`${message.author} Vandaag is het **${day} ${month}**. Vandaag is er geen letter. Maar je kan zelf een dag kiezen door een nummer mee te geven.`);
      }
    }
	}
};