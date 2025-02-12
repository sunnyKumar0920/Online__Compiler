const app = require("express")();

const server = require("http").createServer(app);

server.listen(3000, () => {
  console.log("listening on  port 3000...");
});
