const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // var richie = {
  //   name: "Richie",
  //   age: 24,
  //   dog: "Joey",
  //   game: "Pathfinder"
  // };

  // // res.send('Hey! It works!');
  // res.json(richie);

  res.render('hello', {
    name: "Richie",
    dog: "Joey",
    age: 24,
    title: "I love food!"
  })
});

router.get('/reverse/:name', (req, res) => {
  var reverse = [...req.params.name].reverse().join('');
  res.send(reverse)
})

module.exports = router;
