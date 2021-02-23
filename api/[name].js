module.exports = (req, res) => {
  const {
    query: { name },
  } = req
  res.status(200).send(`Hello ${name}!`)
}
