const countdown = () => {

	// Assign Dates
    const countDate = new Date('November 03, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = countDate - now;

    // Time Working
    const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Calculate left time
	const textDay = Math.floor(timeLeft / day);
	const textHour = Math.floor(timeLeft % day / hour);
	const textMinute = Math.floor(timeLeft % hour / minute);
	const textSecond = Math.floor(timeLeft % minute / second);

	// Dom Manipulation
	document.querySelector("#days").innerHTML = textDay;
	document.querySelector("#hours").innerHTML = textHour;
	document.querySelector("#minutes").innerHTML = textMinute;
	document.querySelector("#seconds").innerHTML = textSecond;

}

// Update every Second
setInterval(countdown, 1000);