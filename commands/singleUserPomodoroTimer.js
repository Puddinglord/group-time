module.exports = {
	name: 'pomodoro',
	description: 'A standard pomodoro timer for a single user. Uses the standard 25 minute work and 5 minute break timers. Four work sessions gets you a 15 minute break. You can also customize the session times by using extra arguments. Find out more by saying `!help pomodoro`',
	usage: '*All durations in minutes: Work Duration, Short Break Duration, Long Break Duration.* Example: `!pomodoro 10 5 7` *would be a work duration of 10 minutes, a short break duration of 5 minutes and a long break duration of 7 minutes.*',
	workDuration: 1500000,
	shortBreakDuration: 300000,
	longBreakDuration: 900000,
	workMessage: 'Work session complete! Time for a well deserved break. I\'ll let you know when the break is over so we can start working again.',
	shortBreakMessage: 'Short break is over! Let\'s get back to work :white_check_mark:',
	longBreakMessage: 'Congraduations! You\'ve compeleted a pomodoro session :confetti_ball: If you want to start another just let me know :ok_hand:',
	standardSessionMessage: 'Starting a standard pomodoro session. We will work for 25 minutes and then take a 5 minute break.',
	sessionCount: 1,
	execute(message, args) {
		// Check to see if we have any custom session times
		if(args.length > 0) {
			this.getCustomSessionTimes(args);
			message.reply('Starting a custom pomodoro session with the following durations:');
			message.reply('Work duration: ' + this.workDuration + ', Short break duration: ' + this.shortBreakDuration + ', Long break duration: ' + this.longBreakDuration);
		}
		// If not then we can just proceed with a standard pomodoro session
		else {
			message.reply(this.standardSessionMessage);
		}

		// Let the user know that we are starting the session so they know when to begin working
		message.reply('The session has officially started! :fire:');

		// Start the recursive session
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
					this.sessionCount = 1;
				}, this.longBreakDuration);
			}, this.workDuration);
		}
	},
	getCustomSessionTimes(args) {
		for (let index = 0; index < args.length; index++) {
			switch (index) {
			case 0:
				this.workDuration = Number(args[index]);
				break;
			case 1:
				this.shortBreakDuration = Number(args[index]);
				break;
			case 2:
				this.longBreakDuration = Number(args[index]);
				break;
			default:
				break;
			}
		}
	},
};