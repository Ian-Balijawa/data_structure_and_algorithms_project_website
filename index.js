const path = require("path");
const express = require("express");
const app = express();

// express middleware
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", "views");

// route handling
app.get("/", function (req, res) {
  return res.render("index", {
    title: "Data structures and Algorithms",
    topics: ["Definition", "Why Data structures", "Applications of ds"],
  });
});

app.get("/analysis-of-algorithms", function (req, res) {
  return res.render("pages/analysis_of_algorithms", {
    title: "Analysis of Algorithms",
    topics: [],
  });
});

app.get("/linear-non-linear", function (req, res) {
  return res.render("pages/linear_non_linear", {
    title: "Linear and Non-linear data structures",
    topics: ["Definition of Array", "Performance measures", "Pros & Cons"],
  });
});

app.get("/fundamentals-of-data-structures", function (req, res) {
  return res.render("pages/fundamentals", {
    title: "Fundamentals of Data Structures",
    topics: [],
  });
});

app.get("/stacks-and-queues", function (req, res) {
  return res.render("pages/stacks_and_queues", {
    title: "Stacks and Queues",
    topics: [
      "Stack Definition",
      "Stack methods",
      "Time complexity equations of stacks",
    ],
  });
});

app.get("/linked-lists", function (req, res) {
  return res.render("pages/linked_lists", {
    title: "Linked Lists",
    topics: [],
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port: ${port}`));
