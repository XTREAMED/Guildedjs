# Guildedjs
A simple template for guilded.js

# command
To add more commands add a file to the commands directory.\
It should look like this
```js
module.exports = {
    aliases: ["aliases to your command (optional)"],
    execute: (msg) => {
      //Your code here
    },
    name: "Name of command",
};
```
