var data = require('./fakeData');

module.exports = function (req, res) {
  var name = req.body.name;
  var job = req.body.job;

  if (!name || !job) {
    return res.status(400).json({
      error: 'Missing parameters on body',
    });
  }

  var newUser = {
    id: data.length + 1,
    name,
    job,
  };

  data.push(newUser);
  return res.status(201).send(newUser);
};
