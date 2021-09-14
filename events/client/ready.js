module.exports = (Discord, client) => {
	console.log('Chippie is online.');
	client.user.setActivity('De BerenClub', { type: 'WATCHING' }).catch(console.error);
};
