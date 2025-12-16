'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      doctor.hasMany(models.cita, {
        foreignKey: 'id_doctor',
        as: 'cita'
      })
    }
  }
  doctor.init({
    nombre: DataTypes.STRING,
    especialidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'doctor',
  });
  return doctor;
};