'use strict';
module.exports = function (sequelize, DataTypes) {

    var PatientAllergy = sequelize.define('PatientAllergy', {
        patientId: {
            type: DataTypes.INTEGER,
            model: 'Patient',
            key: 'id'
        },
        allergyId: {
            type: DataTypes.INTEGER,
            model: 'Allergy',
            key: 'id'
        }
    });

    Patient.associate = function (models) {

        models.PatientAllergy.belongsTo(models.Allergy, {
            as: 'allergy',
            foreignKey: 'allergyId'
        });

        models.PatientAllergy.belongsTo(models.Patient, {
            as: 'patient',
            foreignKey: 'patientId'
        });

    };
    return PatientAllergy;
};
