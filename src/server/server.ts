import express from "express";

const server = express();

server.use(express.static("dist"));
server.set("view engine", "ejs");
server.use("/", (req, res) => {
  res.render("index", {
    content: "Test"
  });
});

server.listen("8000", "localhost", () => {
  console.info("Server is OK on 8000 port");
});
