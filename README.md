# Rulio
#### *A Barebones module based irc bot.*

====
## Install

    git clone git://github.com/Soarez/rulio.git
    cd rulio
    npm install
    cp config.json.example config.json

Edit `config.json` to your needs.

## Run

    node server

## Modules

Rulio works with modules. Modules should export a function with two arguments, an instace of [node-irc](https://github.com/martynsmith/node-irc/) (you should check the [API](http://node-irc.readthedocs.org/en/latest/API.html)) and an object with Rulio's configuration. Client.

**Rulio modules should be [npm modules](http://howtonode.org/how-to-module).**

###### Example

Here is a module that echos private messages. 

On dedicated folder, create a file named `echo.js` with this:

    module.exports = function(client) {
      client.addListener('pm', function (nick, text) {
         client.say(nick, text);
      });
    };
    
Use [`npm init`](https://npmjs.org/doc/init.html) to have npm create a `package.json`, and when set `name` to `rulio-echo` and `main` to `echo.js`.

Now the module can be published with `npm publish` and other rulio users could start using it by using `npm install rulio-echo`. But before publishing we want to test it, and make changes to it. So we use use [`npm link`](https://npmjs.org/doc/link.html) to debug:

On the module folder:

    npm link
    
On rulio's folder:

    npm link rulio-echo

This way, npm will symlink the modules folder to a folder named rulio-echo inside node_modules. This way, the module can be `require()`d like any installed npm module.

**Don't forget to publish your rulio module** so we can use it too :) You should [add it to our list of rulio modules in the wiki](https://github.com/Soarez/rulio/wiki/modules).

#### Loading modules

Load it in rulio's `config.json`, by adding it to `modules`.

    ...
    "modules": [
      "rulio-echo"
     ]
    ... 
    
## License

MIT
