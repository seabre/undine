var fs = require('fs');

exports.configData = function(account, token){

  return {account: account.trim(), token: token.trim()};

};

exports.getUserHome = function() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
};

exports.undineDir = function(){

  return (exports.getUserHome() + "/.undine");

};

exports.undineDirExists = function(){

  return fs.existsSync(exports.undineDir());

};

exports.undineConfigExists = function(){

  return fs.existsSync(exports.undineDir() + "/config.json");

};

exports.createUndineDir = function(){

  return fs.mkdirSync(exports.undineDir());

};

exports.createUndineConfig = function(account, token){
  var configdta = JSON.stringify(exports.configData(account, token));

  return fs.writeFileSync(exports.undineDir() + "/config.json", configdta);

};
