const dotenv = require("dotenv");
const { connectMongo } = require("./services/mongo");
const { initIndexer } = require("./services/indexer");

dotenv.config({ path: ".env.local" });

const app = require("./app");

const port = process.env.PORT || 3000;

async function start() {
  try {
    if (process.env.MONGODB_URI) {
      await connectMongo();
      console.log("MongoDB connected");
    } else {
      console.log("MONGODB_URI not set - dashboard persistence disabled");
    }
    // Skip indexer in serverless (Vercel)
    if (process.env.VERCEL) {
      console.log("Running on Vercel - indexer disabled");
    } else if (process.env.PREDICTIONGAME_ADDRESS) {
      await initIndexer();
      console.log("Event indexer started");
    } else {
      console.log("PREDICTIONGAME_ADDRESS not set - indexer disabled");
    }
  } catch (err) {
    console.error("Startup error:", err);
  }
  app.listen(port, () => {
    console.log(`Server listing to port @ ${port}`);
  });
}

start();
