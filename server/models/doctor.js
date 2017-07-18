'use strict';
module.exports = function (sequelize, DataTypes) {

    var Doctor = sequelize.define('Doctor', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        specialtyId: {
            type: DataTypes.INTERGER,
            model: 'Specialty',
            key: 'id'
        }
  
    });

    Doctor.associate = function (models) {
        models.Doctor.hasMany(models.Visit, {
            as: 'visits',
            foreignKey: 'visitId'
        });

        models.Doctor.belongsTo(models.Specialty, {
            as: 'specialty',
            foreignkey: 'specialtyId'
        });

    };
    return Doctor;
};
