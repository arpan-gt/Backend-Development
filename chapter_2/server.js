import express from "express";
const app = express();

const data = ["Arpan", "Ashish"];

app.use(express.json());

const PORT = 8080;

app.get("/", (req, res) => {
  console.log("home endpoint", req.method);
  res.send(`<body style="background:pink;
    color:blue;">
    <h1>Data:</h1>
    <p>
    ${JSON.stringify(data)}
    </p>
    <a href="/dashboard">Dashboard</a>
    </body`);
});

app.get("/dashboard", (req, res) => {
  console.log("dashboard endpoint", req.method);
  res.send(`
    <body>
    <h1>Dashboard</h1>
    <a href="/">Home</a>
    </body>`);
});

app.get("/api/data", (req, res) => {
  console.log("data endpoint");

  res.send(data);
});

app.post("/api/data", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ error: "name is required" });
  }

  data.push(name);
  console.log(data);
  res.status(200).json(data);
});

app.delete("/api/data", (req, res) => {
  data.pop();
  console.log("popped last element in data array");
  console.log(data);
  res.sendStatus(203);
});

app.listen(PORT, () => {
  console.log("listening to PORT ", PORT);
});
