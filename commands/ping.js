module.exports = {
    aliases: ["ping"],
    execute: (msg) => {
      msg.send("Pong!")
    },
    name: "ping",
};
