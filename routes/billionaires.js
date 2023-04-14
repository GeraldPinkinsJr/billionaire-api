const express = require("express");
const router = express.Router();
const fs = require("fs");
// file system module

const BILLIONAIRES_FILE = "./data/billionaires.json";

// GET REQUEST INVOKES IF GET
router.get("/", (req, res, next) => {
  fs.readFile(BILLIONAIRES_FILE, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("There was a problem reading the file.");
      return;
    }
    res.json(JSON.parse(data));
  });
});

// GET A BILLIONAIRE BY ID
router.get("/:id", (req, res) => {
  fs.readFile(BILLIONAIRES_FILE, "utf-8", (err, data) => {
    if(err) {
      console.error(err);
      res.status(500).send("There was a problem reading the file.");
      return;
    }
    const billionaires = JSON.parse(data)
    const billionaire = billionaires.find(billionaire => billionaire.id === (req.params.id))
    console.log(req.params);

    if(!billionaire) {
        res.status(404).send('Billionaire not found')
        return;
    }
    res.json(billionaire)
  });
});

// POST a new billionaire
router.post("/", (req, res) => {
  fs.readFile(BILLIONAIRES_FILE, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("There was a problem reading the file.");
      return;
    }
    const billionaires = JSON.parse(data);

    // create a new basket with the data from the request
    const newBillionaire = {
      id: (billionaires.length + 1).toString(),
      name: req.body.name,
      networth: req.body.networth,
      source: req.body.source,
    };
    console.log(newBillionaire)
    billionaires.push(newBillionaire);

    // replace the contents of billionaires JSON with the new array
    fs.writeFile(BILLIONAIRES_FILE, JSON.stringify(billionaires), (err) => {
      console.error(err);
      res.status(500).send("There was a problem reading the file.");
      return;
    });
    res.json(newBillionaire);
  });
});

module.exports = router;
