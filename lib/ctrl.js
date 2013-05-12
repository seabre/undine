#!/usr/bin/env node
var utils = require('./undine_utils');
var program = require('commander');

if (!utils.undineDirExists()){

  utils.createUndineDir();

}

var daemon = require('daemonize.redux').setup({
    main: "undine.js",
    name: "undine",
    pidfile: utils.getUserHome() + "/.undine/undine.pid"
});

program
  .version('0.0.0')
  .option('-s, --start', 'start the undine daemon')
  .option('-S, --stop', 'stop the undine daemon')
  .parse(process.argv)

if (program.start) daemon.start();
if (program.stop) daemon.stop();
