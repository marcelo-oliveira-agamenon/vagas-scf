var data = require('./fakeData');

module.exports = function (req, res) {
  var id = req.query.id;

  if (!id) {
    return res.status(400).json({
      error: 'Missing user id parameter',
    });
  }

  const user = data.find((el) => el.id === Number(id));

  if (!user) {
    return res.status(404).json({
      error: 'user doesnt exist',
    });
  }

  res.status(200).json({
    message: `Usuário ${user.name} foi lido ${user.viewCount} vezes.`,
  });
};
