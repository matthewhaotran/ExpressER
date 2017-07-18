'use strict';
module.exports = function (sequelize, DataTypes) {

    let PatientSymptom = sequelize.define('PatientSymptom', {
        symptomId: {
            type: DataType.INTEGER,
            model: 'Symptom',
            key: 'id'
        },
        visitId: {
            type: DataType.INTEGER,
            modal: 'VisitInfo',
            key: 'id'
        }
    });

    PatientSymptom.associate = function (models) {
        models.PatientSymptom.belongsTo(models.Symptom, {
            as: 'symptom',
            foreignKey: 'symptomId'
        });
        models.PatientSymptom.belongsTo(models.VisitInfo, {
            as: 'visit',
            foreignKey: 'visitId'
        });

    };
    return PatientSymptom;

};
