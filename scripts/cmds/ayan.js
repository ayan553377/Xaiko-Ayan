module.exports = {
    config: {
        name: "ayan",
        version: "1.0",
        author: "MR.AYAN", //** original author fb I'd : https://m.me/NOOBS.DEVELOPER.AYAN **//
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "ayan") return message.reply("ayan g ap kaha ho?\nap ko koi dhun raha hen");
}
};
