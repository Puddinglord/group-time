module.exports = {
	name: 'pomodoro',
	description: 'A stadndard pomodoro timer for a single user. Uses the standard 25 minute work and 5 minute break timers. Four work sessions gets you a 15 minute break.',
	execute(message, args) {
		const workDuration = 1500000;
		const shortBreakDuration = 300000;
		const longBreakDuration = 900000;

		const workMessage = 'Work session complete! Time for a well deserved break. I\'ll let you know when the break is over so we can start working again.';
		const shortBreakMessage = 'Short break is over! Let\'s get back to work :white_check_mark:';
		const longBreakMessage = '';

		message.reply('Starting a standard pomodoro session. We will work for 25 minutes and then take a 5 minute break.');
		message.reply('The session has officially started! :fire:');

		setTimeout(() => {
			message.reply(workMessage);
			setTimeout(() => {
				message.reply(shortBreakMessage);
				setTimeout(() => {
					message.reply(workMessage);
					setTimeout(() => {
						message.reply(shortBreakMessage);
						setTimeout(() => {
							message.reply(workMessage);
							setTimeout(() => {
								message.reply(shortBreakMessage);
								setTimeout(() => {
									message.reply(workMessage);
									setTimeout(() => {
										message.reply(longBreakMessage);
										message.reply('Congraduations! You\'ve compeleted a pomodoro session :party: If you want to start another just let me know.');
									}, longBreakDuration);
								}, workDuration);
							}, shortBreakDuration);
						}, workDuration);
					}, shortBreakDuration);
				}, workDuration);
			}, 5000);
		}, 25000);
	},
};