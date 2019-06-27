module.exports = {
	name: 'basic-timer',
	description: 'A basic timer for a single user.',
	execute(message, args) {
		// Get the username of the person for whom the timer needs to start for
		const userDuration = args[0];
		const durationType = args[1].toLowerCase();

		// Tell the user that we have gotten the duration and type they specified
		message.reply('I have created a time for you for the following duration: ' + userDuration + ' ' + durationType);

		// Convert the natural time the user gave us to milliseconds
		// Syntax will be hours minutes seconds (3 hour 30 minutes 15 seconds)
		let duration = null;

		switch (durationType.charAt(0)) {
		case 's':
			duration = userDuration * 1000;
			break;
		case 'm':
			duration = (userDuration * 60) * 1000;
			break;
		case 'h':
			duration = ((userDuration * 60) * 60) * 1000;
			break;
		default:
			break;
		}

		setTimeout(() => {
			message.reply('The timer for ' + userDuration + ' ' + durationType + ' has completed!');
		}, duration);
	},
};