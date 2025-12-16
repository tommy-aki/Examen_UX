'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cita.belongsTo(models.doctor, {
        foreignKey:'id_doctor',
        as: 'doctor'
      })
    }
  }
  cita.init({
    id_doctor: DataTypes.INTEGER,
    fecha_disponible: DataTypes.DATE,
    tipo_consulta: DataTypes.ENUM('presencial', 'virtual'),
    motivo_consulta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cita',
  });
  return cita;
};