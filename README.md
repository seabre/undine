# Undine

## Campfire notifications for your desktop

### Why?

There isn't a great way to get chat notifications in Campfire on Linux.
I've tried most of them. They don't do what I want them to do.

This actually works on Linux, and *should* work on OS X. See [this](https://github.com/visionmedia/node-growl) for more details.

### Installation

I haven't published the package yet to npm, so for now, do the following:

`sudo npm install -g git://github.com/seabre/undine.git`

### Configuration

Run:

```
$ undine --config
```

Fill in the prompts with your Campfire subdomain and your Campfire API key.

### Usage

After everything is setup, just run:

```
$ undine --start
```

All campfire chatrooms that you a currently a member of will be polled.
Note: If you join a new chat, you will not get new notifications for that room, you will need to restart undine,
which you can do by running:

```
$ undine --stop
$ undine --start
```

To see all options run:

```
$ undine --help
```

### Issues

* Does not keep track of newly joined rooms.
* Does not keep track of rooms you have left.
