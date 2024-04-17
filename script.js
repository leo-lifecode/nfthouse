const countDownClock = (number = 100, format = 'seconds') => {

    const d = document;
    const daysElement = d.querySelector('.days');
    const hoursElement = d.querySelector('.hours');
    const minutesElement = d.querySelector('.minutes');
    const secondsElement = d.querySelector('.seconds');
    const daysElement2 = d.querySelector('.days2');
    const hoursElement2 = d.querySelector('.hours2');
    const minutesElement2 = d.querySelector('.minutes2');
    const secondsElement2 = d.querySelector('.seconds2');
    let countdown;
    convertFormat(format);


    function convertFormat(format) {
        switch (format) {
            case 'seconds':
                return timer(number);
            case 'minutes':
                return timer(number * 60);
            case 'hours':
                return timer(number * 60 * 60);
            case 'days':
                return timer(number * 60 * 60 * 24);
        }
    }

    function timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(countdown);
                return;
            };

            displayTimeLeft(secondsLeft);

        }, 1000);
    }

    function displayTimeLeft(seconds) {
        daysElement.textContent = Math.floor(seconds / 86400);
        hoursElement.textContent = Math.floor((seconds % 86400) / 3600) + ":";
        minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60) + ":";
        secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;

        daysElement2.textContent = Math.floor(seconds / 86400);
        hoursElement2.textContent = Math.floor((seconds % 86400) / 3600) + ":";
        minutesElement2.textContent = Math.floor((seconds % 86400) % 3600 / 60) + ":";
        secondsElement2.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
}
const countDownClock2 = (number = 100, format = 'seconds') => {

    const d = document;
    const daysElement2 = d.querySelector('.days2');
    const hoursElement2 = d.querySelector('.hours2');
    const minutesElement2 = d.querySelector('.minutes2');
    const secondsElement2 = d.querySelector('.seconds2');
    let countdown;
    convertFormat(format);


    function convertFormat(format) {
        switch (format) {
            case 'seconds':
                return timer(number);
            case 'minutes':
                return timer(number * 60);
            case 'hours':
                return timer(number * 60 * 60);
            case 'days':
                return timer(number * 60 * 60 * 24);
        }
    }

    function timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(countdown);
                return;
            };

            displayTimeLeft(secondsLeft);

        }, 1000);
    }

    function displayTimeLeft(seconds) {
        daysElement2.textContent = Math.floor(seconds / 86400);
        hoursElement2.textContent = Math.floor((seconds % 86400) / 3600) + ":";
        minutesElement2.textContent = Math.floor((seconds % 86400) % 3600 / 60) + ":";
        secondsElement2.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
}
const countDownClock3 = (number = 100, format = 'seconds') => {

    const d = document;
    const daysElement2 = d.querySelector('.days3');
    const hoursElement2 = d.querySelector('.hours3');
    const minutesElement2 = d.querySelector('.minutes3');
    const secondsElement2 = d.querySelector('.seconds3');
    let countdown;
    convertFormat(format);


    function convertFormat(format) {
        switch (format) {
            case 'seconds':
                return timer(number);
            case 'minutes':
                return timer(number * 60);
            case 'hours':
                return timer(number * 60 * 60);
            case 'days':
                return timer(number * 60 * 60 * 24);
        }
    }

    function timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(countdown);
                return;
            };

            displayTimeLeft(secondsLeft);

        }, 1000);
    }

    function displayTimeLeft(seconds) {
        daysElement2.textContent = Math.floor(seconds / 86400);
        hoursElement2.textContent = Math.floor((seconds % 86400) / 3600) + ":";
        minutesElement2.textContent = Math.floor((seconds % 86400) % 3600 / 60) + ":";
        secondsElement2.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
}
const countDownClock4 = (number = 100, format = 'seconds') => {

    const d = document;
    const daysElement2 = d.querySelector('.days4');
    const hoursElement2 = d.querySelector('.hours4');
    const minutesElement2 = d.querySelector('.minutes4');
    const secondsElement2 = d.querySelector('.seconds4');
    let countdown;
    convertFormat(format);


    function convertFormat(format) {
        switch (format) {
            case 'seconds':
                return timer(number);
            case 'minutes':
                return timer(number * 60);
            case 'hours':
                return timer(number * 60 * 60);
            case 'days':
                return timer(number * 60 * 60 * 24);
        }
    }

    function timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(countdown);
                return;
            };

            displayTimeLeft(secondsLeft);

        }, 1000);
    }

    function displayTimeLeft(seconds) {
        daysElement2.textContent = Math.floor(seconds / 86400);
        hoursElement2.textContent = Math.floor((seconds % 86400) / 3600) + ":";
        minutesElement2.textContent = Math.floor((seconds % 86400) % 3600 / 60) + ":";
        secondsElement2.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
}
const countDownClock5 = (number = 100, format = 'seconds') => {

    const d = document;
    const daysElement2 = d.querySelector('.days5');
    const hoursElement2 = d.querySelector('.hours5');
    const minutesElement2 = d.querySelector('.minutes5');
    const secondsElement2 = d.querySelector('.seconds5');
    let countdown;
    convertFormat(format);


    function convertFormat(format) {
        switch (format) {
            case 'seconds':
                return timer(number);
            case 'minutes':
                return timer(number * 60);
            case 'hours':
                return timer(number * 60 * 60);
            case 'days':
                return timer(number * 60 * 60 * 24);
        }
    }

    function timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(countdown);
                return;
            };

            displayTimeLeft(secondsLeft);

        }, 1000);
    }

    function displayTimeLeft(seconds) {
        daysElement2.textContent = Math.floor(seconds / 86400);
        hoursElement2.textContent = Math.floor((seconds % 86400) / 3600) + ":";
        minutesElement2.textContent = Math.floor((seconds % 86400) % 3600 / 60) + ":";
        secondsElement2.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
}


/*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/
countDownClock(999, 'days');
countDownClock(18, 'hours');

countDownClock2(999, 'days');
countDownClock2(2, 'hours');

countDownClock3(999, 'days');
countDownClock3(7, 'hours');

countDownClock5(999, 'days');
countDownClock5(13, 'hours');

countDownClock4(999, 'days');
countDownClock4(23, 'hours');