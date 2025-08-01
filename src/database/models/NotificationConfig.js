const { Sequelize } = require("sequelize");

const sequelize = require("../instance.js");

const NotificationConfig = sequelize.define("NotificationConfig", {
  guildId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  guildChannelId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  ytChannelId: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  ytChannelTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastCheckedTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  lastCheckedVideoId: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  lastCheckedVideoPubDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = NotificationConfig;
