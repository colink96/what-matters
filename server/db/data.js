const today = new Date();

const tasks = [
  {
    id: 1,
    name: 'Eat breakfast',
    minute: 30,
    hour: 9,
    date: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
    complete: false,
  },
  {
    id: 2,
    name: 'Afternoon workouts',
    minute: 0,
    hour: 12,
    date: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
    complete: false,
  },
  {
    id: 3,
    name: 'Work on projects',
    minute: 0,
    hour: 15,
    date: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
    complete: false,
  },
];

module.exports = tasks;
