var fs = require('fs');

exports.getUserHome = function() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
};

exports.undineDirExists = function(){

  return fs.existsSync(exports.getUserHome() + "/.undine");

};

exports.undineConfigExists = function(){

  return fs.existsSync(exports.getUserHome() + "/.undine/config.json");

};

exports.createUndineDir = function(){

  return fs.mkdirSync(exports.getUserHome() + "/.undine");

};
