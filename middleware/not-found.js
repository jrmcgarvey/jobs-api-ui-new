const notFound = (req, res) =>
  res.status(404).send(`${req.url} Route does not exist`);

module.exports = notFound;
