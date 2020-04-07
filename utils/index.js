export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export let minutes = [];
for (let i = 0; i < 60; i++) {
  minutes.push(i);
}

// Hour 12 is represented by a value of 0 since 12AM = 00:00, and 12PM = 12:00
export let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const timeFormatter = (hours, minutes) => {
  let timeString = '';
  if (minutes < 10) {
    timeString = ':0' + minutes.toString();
  } else {
    timeString = ':' + minutes.toString();
  }

  if (hours >= 12) {
    timeString = timeString + 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  } else {
    timeString = timeString + 'AM';
  }

  return hours.toString() + timeString;
};
