module.exports = {
	name: 'ping',
	description: 'If you Ping, I will Pong. There is no other way.',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};