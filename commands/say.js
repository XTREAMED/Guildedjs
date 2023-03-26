module.exports = {
    name: "say",
    aliases: ["speak", "echo"],
    execute: (msg, args) => {
        if (!args.length) return msg.send("You must give me something to say!");
        msg.send(args.join(" "));
    },
};
