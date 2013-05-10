#!/usr/bin/env node

var Campfire = require("campfire").Campfire;
var growl = require('growl')
var _ = require("lodash");
var fs = require('fs');

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

var settings = JSON.parse(fs.readFileSync(getUserHome() + "/.undine/config.json", encoding="ascii"));

var instance = new Campfire({
 ssl: true,
 token : settings.token,
 account : settings.account});


instance.presence(function(e,r) {

  _.each(r, function(room){

    room.listen(function(message) {
      instance.user(message.userId, function(n,u){
        var user =  undefined;

        if (u == undefined){
          return;
        } else {
          user = u.user.name;
        }

        if (message.type != "TextMessage") {
          return;
        }

        growl(user + ": " + message.body.replace("'", '"'), {title: room.name, image: "notificationicon.png"})
    });
  });
})
});
