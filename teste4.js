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
      error: 'User dont exist',
    });
  }

  const { name, job } = req.body;
  const editUser = {
    ...user,
    name,
    job,
  };
  data = data.map((el) => {
    if (el.id === Number(id)) {
      return editUser;
    }

    return el;
  });

  return res.status(200).json(editUser);
};
