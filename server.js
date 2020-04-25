//import express from "express";

const express = require("express");
const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "jhon" },
    { id: 1, firstName: "wong" },
    { id: 1, firstName: "test" },
  ];

  res.json(customers);
});

const port = 2345;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
