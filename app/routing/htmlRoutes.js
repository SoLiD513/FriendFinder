var path = require("path");

//ROUTES

module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //a USE route to home page
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};