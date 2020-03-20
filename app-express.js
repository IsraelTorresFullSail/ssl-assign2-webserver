"use strict"
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let ejs = require("ejs");
const router = express.Router();

app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

router.get("/", function(req, res) {
    res.render("index", {pagename: "Home"}); //view/index.ejs
})
router.get("/about", function(req, res) {
    res.render("about", {pagename: "About"}); //view/about.ejs
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

    res.render("index", {pagename: "Home", errors:errors});
})

router.post("/register", function(req,res) {
    var errorsReg = [];
    if(req.body.firstname == "") {
        errorsReg.push("First name is required")
    }
    if(req.body.lastname == "") {
        errorsReg.push("Last name is required")
    }
    if(req.body.address == "") {
        errorsReg.push("Address is required")
    }
    if(req.body.city == "") {
        errorsReg.push("City is required")
    }
    if(req.body.state == "") {
        errorsReg.push("State is required")
    }
    if(req.body.zip == "") {
        errorsReg.push("Zip code is required")
    }
    if(req.body.age == "") {
        errorsReg.push("Age is required")
    }
    if(req.body.gender == "") {
        errorsReg.push("Gender is required")
    }
    if(req.body.consent == "") {
        errorsReg.push("Consent is required")
    }
    if(req.body.bio == "") {
        errorsReg.push("Bio is required")
    }

    res.render("index", {pagename: "Home", errors:errorsReg});
})

app.use(express.static("public"));
app.use("/", router);
var server = app.listen("8080");
