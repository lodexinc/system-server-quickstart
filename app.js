var runtime = require('system-runtime');
var id = '';

// install the admin
id = runtime.install('system-admin-server');
// start the admin
runtime.start(id);

// install the app
id = runtime.install('app.json');
// start the app
runtime.start(id);

// set log level for debug
runtime.require('logger').level('debug');