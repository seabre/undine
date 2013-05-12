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
});
