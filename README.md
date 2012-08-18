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

    npm start
    # or
    node server

## Modules

Rulio works with modules. Modules should export a function with only one argument, an instace of [node-irc](https://github.com/martynsmith/node-irc/) Client. You should check the [API](http://node-irc.readthedocs.org/en/latest/API.html).

###### Example

Here is a module that echos private messages. Save it as `echo.js`.

    module.exports = exports = function(client) {
      client.addListener('pm', function (nick, text) {
         client.say(nick, text);
      });
    };
    
Load it in `config.json`, by adding it to `modules`, the same way you would require it from the root.

    ...
    "modules": [
      "./echo"
     ]
    ... 
    
## License

MIT