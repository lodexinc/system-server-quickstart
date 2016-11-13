var runtime = require('system-runtime');

// install and start the admin
runtime.install('system-admin-server');

// install and start the app
runtime.install('app.json');

// set log level for debug
runtime.require('logger').level('debug');