'use strict';

const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  const todoboxes = sequelize.define(
    'todobox',
    {
      memoTitle: DataTypes.STRING,
      memoContent: DataTypes.STRING,
      youtubeInfo: DataTypes.STRING,
      isComplete: DataTypes.BOOLEAN,
      date: DataTypes.STRING,
      usersId: DataTypes.INTEGER,
    },
    {
      hooks: {},
    },
  );

  todoboxes.associate = function (models) {
    todoboxes.belongsTo(models.users, { foreignKey: 'usersId' });
  };
  return todoboxes;
};
