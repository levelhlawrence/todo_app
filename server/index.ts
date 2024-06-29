import { app, PORT } from "./app/server.ts";

app.get("/", (req: any, res: any) => {
  try {
    res.status(200).json({ message: "Hello World" });
  } catch (error: any) {
    res.json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  console.log(PORT);
});
