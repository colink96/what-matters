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
    /*

    // Sequelize:
    /*
    tasks = await Task.findAll({where: {
      date: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear()
    }})
    */

    const tasks = data.filter(task => {
      return (
        task.date === today.getDate() &&
        task.month === today.getMonth() &&
        task.year === today.getFullYear()
      );
    });
    res.send(tasks);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
