const fs = require("node:fs");

module.exports = (client) => {
  client.handleEvents = async () => {
    const eventFolders = fs.readdirSync(`./src/events`);

    for (const folder of eventFolders) {
      const eventFiles = fs
        .readdirSync(`./src/events/${folder}`)
        .filter((file) => file.endsWith(".js"));

      for (const file of eventFiles) {
        const event = require(`../../events/${folder}/${file}`);

        switch (folder) {
          case "client":
            if (event.once)
              client.once(event.name, (...args) =>
                event.execute(...args, client)
              );
            else
              client.on(event.name, (...args) =>
                event.execute(...args, client)
              );
            break;
          default:
            console.log("Unhandled event.");
            break;
        }
      }
    }
  };
};
