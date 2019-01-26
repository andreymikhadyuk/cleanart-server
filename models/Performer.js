module.exports = function (Sequelize, sequelize) {
  const Performer = sequelize.define('performer', {
    id: {
      field: 'performer_id',
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    lastName: {
      field: 'last_name',
      type: Sequelize.STRING,
    },
    firstName: {
      field: 'first_name',
      type: Sequelize.STRING,
    },
    companyName: {
      field: 'company_name',
      type: Sequelize.STRING,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    phone: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
  });
  return Performer;
};
