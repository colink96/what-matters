const router = require('express').Router();

// Loading dummy data from a file
const data = require('../db/data');

router.get('/', async (req, res, next) => {
  try {
    data.sort((a, b) => {
      return a.hour * 60 + a.minute - (b.hour * 60 + b.minute);
    });
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

    // Validating our data types before saving to our "DB"
    if (
      !newTask.name ||
      typeof newTask.name != 'string' ||
      newTask.minute > 59 ||
      typeof newTask.minute != 'number' ||
      newTask.hour > 23 ||
      typeof newTask.hour != 'number'
    ) {
      res.status(400).send('Bad request');
    } else {
      data.push(newTask);
      data.sort((a, b) => {
        return a.hour * 60 + a.minute - (b.hour * 60 + b.minute);
      });
      res.status(200).send(data);
    }
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const task = data.find(el => {
      return el.id == req.params.id;
    });
    if (!task) {
      res.status(404).send('Not found');
    } else {
      task.complete = !task.complete;
      data.sort((a, b) => {
        return a.hour * 60 + a.minute - (b.hour * 60 + b.minute);
      });
      res.send(data);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    data = data.filter(task => {
      return task.id != req.params.id;
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
