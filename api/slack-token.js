const FormData = require('form-data')
const fetch = require("node-fetch")

module.exports = async (req, res) => {
  try {
    const form = new FormData()
    form.append("client_id", process.env.SLACK_CLIENT_ID);
    form.append("client_secret", process.env.SLACK_CLIENT_SECRET);
    form.append("redirect_uri", process.env.SLACK_REDIRECT_URI);
    form.append("code", req.body.code)

    const response = await fetch("https://slack.com/api/oauth.v2.access", { method: 'POST', body: form })
      .then((res) => res.json())

    res.send(response)
  } catch (error) {
    res.status(400).send(error)
  }
}
