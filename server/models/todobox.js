'use strict';

const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  const todobox = sequelize.define(
    'todobox',
    {
      memoTitle: DataTypes.STRING,
      memoContent: DataTypes.STRING,
      yotubeInfo: DataTypes.STRING,
      isComplete: DataTypes.BOOLEAN,
      date: DataTypes.STRING,
      usersId: DataTypes.INTEGER,
    },
    {
      hooks: {},
    },
  );

  todobox.associate = function (models) {};
  return todobox;
};
