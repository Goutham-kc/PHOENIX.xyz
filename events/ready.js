module.exports = (client) => {
    console.log("Ready to go!!");
    console.log(` logged in as ${client.user.tag}`);
    client.user.setActivity(` for ??help| v3.0.3 `, { type: "WATCHING" });
}
