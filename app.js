// require runtime
var runtime = require('system-runtime');

// require admin system
var admin = require('./system-server-admin.json');

// to get require method in global
// to be able to use it in runtime
global._require = require;

// admin system
var systemId = runtime.require('db').system(admin);
runtime.require(systemId).main();

// set log level
runtime.require('logger').level('debug');

// create a system
var system = runtime.system('example');

// add your code in the main method of the system
system.on('main', function main() {
    console.log('Hello world !');
});

// run your system
system.main();