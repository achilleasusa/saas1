'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    name: DataTypes.STRING
  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
  };
  return Blog;
};