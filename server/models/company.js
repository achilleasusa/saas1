'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    currentEmployeeNumber: DataTypes.INTEGER,
    exEmployeeNumber: DataTypes.INTEGER,
    leadInvestors: DataTypes.STRING,
    ranking: DataTypes.INTEGER
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};