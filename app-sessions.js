"use strict"

var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

var express = require("express");
var request = require("request");

let ejs = require("ejs");
const router = express.Router();

var app = express();
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const session = require('express-session')
app.use(session({secret:"secret", saveUninitialized: true, resave: true}));
var sess;

router.get("/", function(req, res) {
    sess = req.session;
    res.render("index", {pagename: "Home", sess: sess}); //view/index.ejs
})

router.get("/about", function(req, res) {
    sess = req.session;
    res.render("about", {pagename: "About", sess: sess}); //view/about.ejs
})

router.get("/profile", function(req, res) {
    sess = req.session;
    if(typeof(sess) == "undefined" || sess.loggedin != true) {
        var errors = ["Not a authenticated user"];
        res.render("index", {pagename: "Home", errors: errors})
    } else {
        res.render("profile", {pagename: "Profile", sess: sess})
    }
})

router.get("/logout", function(req, res) {
    sess = req.session;
    sess.destroy(function(err) {
        res.redirect("/");
    })
})

router.post("/login", function(req,res) {
    var errors = [];
    if(req.body.email == "") {
        errors.push("Email is required")
    }
    if(req.body.password == "") {
        errors.push("Password is required")
    }

    let reE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!reE.test(req.body.email)) {
        errors.push("Email is not valid")
    }

    let reP  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!reP.test(req.body.password)) {
        errors.push("Password is not valid")
    }

    // write your conditinal here if matching username and password good show profile bad show index with errors
    if(req.body.email != "Mike@aol.com" && req.body.password != "abc123") {
        errors.push("Invalid Login")
        res.render("index", {pagename: "Home", errors: errors})
    }
    else if(req.body.email == "Mike@aol.com" && req.body.password == "abc123") {
        sess = req.session;
        sess.loggedin = true;
        session.email = req.body.email;
        res.render("profile", {pagename: 'Home', sess: sess});
    } else {
        res.render("index", {pagename: "Home", errors: errors})
    }
})

app.use(express.static("public"));
app.use("/", router);
var server = app.listen("8080");
