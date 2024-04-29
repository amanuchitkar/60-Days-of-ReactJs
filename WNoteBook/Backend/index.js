const connectToMongo = require("./db");
const express = require("express");
const app = express();
const port = 3000;

connectToMongo();

app.use("/api/auth", require("./routres/auth"));
app.use("/api/notes", require("./routres/notes"));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
