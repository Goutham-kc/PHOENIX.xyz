module.exports = (client) => {
    console.log("Ready to go!!");
    console.log(` logged in as ${client.user.tag}`);
    client.user.setActivity(`${client.users.cache.size} Users| v3.0.3 `, { type: "WATCHING" });
}