var express = require("express");
var app = express();
app.set("view engine", "pug");

var start = new Date("2016-09-12 00:00:00").getTime();

app.get("/", function (req, res) {
    var week = Math.ceil((new Date().getTime() - start) / 604800000);
    res.render("index", {
        week: week > 0 && week <= 14 && week
    })
});

app.listen(process.env.PORT || 3000);