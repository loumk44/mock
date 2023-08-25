const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const router = jsonServer.router('mock/db.json');

server.use(middlewares);
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});


module.exports = () => ({
    Profils: [{id: "1",
    nom: "ingrid",
    prenom: "lou",
    email: "ingrid@gmail.com",
    adresse: "658470120",
    codepostal: "BP:505",
    etat: "etat2",
    pays: "belgique",
    ville: "douala",
    section: "belgique1",
    region: "sud"
}]
   
  });
  const Profils = require("./Profils");
module.exports = () => ({
  Profils
});
const Path = require("path");
const glob = require("glob");
const config = require('./config.json');
const apiFiles = glob.sync(Path.resolve(__dirname, "./") + "/**/*.js", {
  nodir: true
});


let data = {};
apiFiles.forEach(filePath => {
  const api = require(filePath);
  let [, url] = filePath.split("mock/");
  url =
    url.slice(url.length - 9) === "/index.js"
      ? url.slice(0, url.length - 9) // remove /index.js
      : url.slice(0, url.length - 3); // remove .js
  data[url.replace(/\//g, "-")] = api;
});
module.exports = () => {
  return data;
};
