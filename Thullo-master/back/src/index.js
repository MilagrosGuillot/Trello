const server = require("./app.js")
const { conn } = require('./db.js');
require("dotenv").config()
// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`%s listening at`, process.env.PORT); // eslint-disable-line no-console
  });
});