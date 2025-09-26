const dotenv = require("dotenv");

dotenv.config({ path: ".env.local" });

const app = require("./app");

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server listing to port @ ${port}`);
});
