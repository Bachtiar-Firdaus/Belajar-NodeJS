const http = require("http");
const hello = require("./helloworld");
const test = require("./coba");
const moment = require("moment");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Conten-Type", "text/plain");
  const url = req.url;
  if (url === "/employee") {
    res.write("data employ");
  } else {
    res.write("data apa yang anda butuh kan?");
  }
  //   res.write(hello.hello());
  //   res.write(hello.world());
  //   res.write(test);
  //   res.write(moment().calendar());
  //   res.write(
  //     JSON.stringify({
  //       status: "succsess",
  //       message: "response success",
  //     })
  //   );
  //   res.write(req.url);
  res.end();
});

const hostname = "127.0.0.1";
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
