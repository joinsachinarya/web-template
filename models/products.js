const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    let p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.error(err);
      });
    });
  }
  static fetchAll(cb) {
    let p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
