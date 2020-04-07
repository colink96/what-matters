const router = require('express').Router();

// Loading dummy data from a file
const data = require('../db/data');

router.get('/', async (req, res, next) => {
  try {
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newTask = {
      id: data[data.length - 1].id + 1,
      name: req.body.name,
      minute: req.body.minute,
      hour: req.body.hour,
      complete: false,
    };
    console.log(newTask);
    // Validating our data types before saving to our "DB"
    if (
      !newTask.name ||
      typeof newTask.name != 'string' ||
      !newTask.minute ||
      typeof newTask.minute != 'number' ||
      !newTask.hour ||
      typeof newTask.hour != 'number'
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
