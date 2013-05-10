# Undine

## Campfire notifications for your desktop.

### Installation

I haven't published the package yet to npm, so for now, do the following:

`sudo npm install -g git://github.com/seabre/undine.git`

Next, you will need to write a configuration with your Campfire credentials.
Right now, it doesn't generate this for you at all, so you will have to do it yourself.

First, create a folder in your home directory called .undine: `mkdir ~/.undine`

Then create a file called config.json: `touch ~/.undine/config.json`

Then, put the following in the config.json file you made:

```json
{
   "token":"YOUR_CAMPFIRE_API_TOKEN_GOES_HERE",
   "account":"YOUR_CAMPFIRE_SUBDOMAIN_GOES_HERE"
}

```

### Usage

After everything is setup, just run `undine`. All campfire chatrooms that you a currently a member of will be polled.
Note: If you join a new chat, you will not get new notifications for that room, you will need to restart undine.

### Issues

* Does not keep track of newly joined rooms.
* Does not keep track of rooms you have left.
* Occasionally runs into an exception when grabbing username from received message.


