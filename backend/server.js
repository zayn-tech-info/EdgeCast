const dotenv = require("dotenv");

const app = require("./app");

dotenv.config({ path: ".env.local" });

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server listing to port @ ${port}`);
});
