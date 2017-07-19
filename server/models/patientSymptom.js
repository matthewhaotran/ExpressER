'use strict';
module.exports = function (sequelize, DataTypes) {

    let PatientSymptom = sequelize.define('PatientSymptom', {
        symptomId: {
            type: DataTypes.INTEGER,
            model: 'Symptom',
            key: 'id'
        },
        visitId: {
            type: DataTypes.INTEGER,
            model: 'Visit',
            key: 'id'
        }
    });

    PatientSymptom.associate = function (models) {
        models.PatientSymptom.belongsTo(models.Symptom, {
            as: 'symptom',
            foreignKey: 'symptomId'
        });
        models.PatientSymptom.belongsTo(models.Visit, {
            as: 'visit',
            foreignKey: 'visitId'
        });

    };
    return PatientSymptom;

};
