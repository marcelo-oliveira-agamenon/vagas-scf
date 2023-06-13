var data = require('./fakeData');

module.exports = function (req, res) {
  var id = req.query.id;

  if (!id) {
    return res.status(400).json({
      error: 'Missing user id parameter',
    });
  }

  const indexOfUser = data.map((el) => el.id).indexOf(Number(id));

  if (indexOfUser === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  data = data.filter((el) => el.id !== Number(id));
  res.status(200).json({
    message: 'success',
  });
};
