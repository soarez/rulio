module.exports = exports = function(client) {
  client.addListener('pm', function (nick, text) {
     client.say(nick, text);
  });
};
