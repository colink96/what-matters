const router = require('express').Router();

// Loading dummy data from a file, tasks will always be scheduled for today's date.
const data = require('../db/data');

router.get('/', async (req, res, next) => {
  try {
    const today = new Date();

    /*
    Assumption: GET /api/tasks should only return tasks scheduled for today.

    I accomplish this here using the filter method, but had this been a real database I would instead build a the query using an ORM called Sequelize
    (https://sequelize.org/master/).
    */

    const tasks = data.filter(task => {
      return (
        task.date === today.getDate() &&
        task.month === today.getMonth() &&
        task.year === today.getFullYear()
      );
    });
    res.status(200).send(tasks);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newTask = {
      id: data[data.length - 2].id + 1,
      name: req.body.name,
      minute: req.body.minute,
      hour: req.body.hour,
      date: req.body.date,
      month: req.body.month,
      year: req.body.year,
      complete: false,
    };

    // Validating our data types before saving to our "DB"
    if (
      !newTask.name ||
      typeof newTask.name != 'string' ||
      !newTask.minute ||
      typeof newTask.minute != 'number' ||
      !newTask.hour ||
      typeof newTask.hour != 'number' ||
      !newTask.date ||
      typeof newTask.date != 'number' ||
      !newTask.month ||
      typeof newTask.month != 'number' ||
      !newTask.year ||
      typeof newTask.year != 'number'
    ) {
      res.status(400).send('Bad request');
    } else {
      data.push(newTask);
      res.status(200).send(newTask);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
