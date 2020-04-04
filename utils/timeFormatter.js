export default (hours, minutes) => {
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
