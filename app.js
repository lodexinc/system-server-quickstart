// to get require method in global
// to be able to use it in runtime
global._require = require;

// require runtime
var runtime = require('system-runtime');

// require admin system
var admin = require('system-admin-server');

// require the app
var app = require('./app.json');

// run admin system
var systemId = runtime.require('db').system(admin);
runtime.require(systemId).main();

// run the app
var appId = runtime.require('db').system(app);
runtime.require(appId).main();

// set log level for debug
runtime.require('logger').level('debug');