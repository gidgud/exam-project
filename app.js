import "dotenv/config";

import express from "express";
const app = express();

app.use(express.json());

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log("Error starting the server", error);
    return;
  }
  console.log("Server is running on port", server.address().port);
});
