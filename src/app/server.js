var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose")

var db = mango.connect("mongodb://localhost:27017/AngularCRUD", function(err, response){
    if(err){ console.log(err);}
    else{ console.log('Connected to' + db, '+' , response)}

})