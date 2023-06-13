var data = require('./fakeData');

const getUser = (req, res, next) => {
  var id = req.query.id;

  if (!id) {
    return res.status(400).json({
      error: 'Missing user id parameter',
    });
  }

  var user;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === Number(id)) {
      user = data[i];
      break;
    }
  }

  return res.status(200).send(user);
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
