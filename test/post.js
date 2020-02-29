//Require the dev-dependencies
let envPath = __dirname + "/../.env"
require('dotenv').config({path:envPath})
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();