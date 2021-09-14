require('dotenv').config();
module.exports = {
	name: 'ping',
	description: 'test ping command',
	execute(client, message, args) {
		if (message.member.roles.cache.has(process.env.ROLE_ID_TEST)) {
			message.channel.send('pong!');
		} else {
			message.channel.send('Je hebt niet de rechten om dit commando te gebruiken.');
		}
	}
};
