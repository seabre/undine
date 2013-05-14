var utils = require('../lib/undine_utils');
var assert = require('assert');

describe('Undine Utils', function () {
  describe('#getUserHome()', function () {
    it('should return the home directory for the current system', function () {
      if (process.platform == "win32"){
        assert.equal(process.env['USERPROFILE'], utils.getUserHome());
      }
      else{
        assert.equal(process.env["HOME"], utils.getUserHome());
      }
    });
  });

  describe('#undineDir()', function () {
    it('should return the undine application directory', function () {
      assert.equal(utils.undineDir(), utils.getUserHome() + "/.undine");
    });
  });

  describe('#configData()', function () {
    it('should be a hash with account and token keys', function () {
      var account = "test";
      var token = "test";
      var data = utils.configData(account, token);
      assert.equal(true, "account" in data);
      assert.equal(true, "token" in data);
    });

    it('should strip whitespace off of the config options', function () {
      var account = "  test   ";
      var token = "   test      ";
      var data = utils.configData(account, token);
      assert.equal("test", data.account);
      assert.equal("test", data.token);
    });
  });
});
