const express = require("express");
const cors = require("cors");

const categoryRoutes = require("./routes/categoryRoutes");

const app = express();
const port = 3001;

app.use(cors()); //This allows sites to connect to this API.
app.use(express.json());

app.use("/categories", categoryRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
