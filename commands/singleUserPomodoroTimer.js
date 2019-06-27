module.exports = {
	name: 'pomodoro',
	description: 'A stadndard pomodoro timer for a single user. Uses the standard 25 minute work and 5 minute break timers. Four work sessions gets you a 15 minute break.',
	workDuration: 1500000,
	shortBreakDuration: 300000,
	longBreakDuration: 900000,
	workMessage: 'Work session complete! Time for a well deserved break. I\'ll let you know when the break is over so we can start working again.',
	shortBreakMessage: 'Short break is over! Let\'s get back to work :white_check_mark:',
	longBreakMessage: '',
	sessionCount: 1,
	execute(message, args) {
		message.reply('Starting a standard pomodoro session. We will work for 25 minutes and then take a 5 minute break.');
		message.reply('The session has officially started! :fire:');

		this.pomomodoSession(message);
	},
	pomomodoSession(message) {
		if(this.sessionCount < 4) {
			setTimeout(() => {
				message.reply(this.workMessage);
				setTimeout(() => {
					message.reply(this.shortBreakMessage);
					this.sessionCount++;
					this.pomomodoSession(message);
				}, this.shortBreakDuration);
			}, this.workDuration);
		}
		else {
			setTimeout(() => {
				message.reply(this.workMessage);
				setTimeout(() => {
					message.reply(this.longBreakMessage);
				}, this.longBreakDuration);
			}, this.workDuration);
		}
	},
};