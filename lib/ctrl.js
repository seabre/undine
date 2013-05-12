#!/usr/bin/env node
var utils = require('./undine_utils');

var daemon = require('daemonize.redux').setup({
    main: "undine.js",
    name: "undine",
    pidfile: utils.getUserHome() + "/.undine/undine.pid"
});

switch (process.argv[2]) {

    case "start":
        daemon.start();
        break;

    case "stop":
        daemon.stop();
        break;

    default:
        console.log("Usage: [start|stop]");
}
