'use strict';
module.exports = function (sequelize, DataTypes) {

	var Symptom = sequelize.define('Symptom', {
		name: DataTypes.STRING,
		priority: DataTypes.STRING,
		description: DataTypes.STRING

	});

	Symptom.associate = function (models) {
		models.Symptom.hasMany(models.PatientSymptom, {
			as: 'patientSypmtoms',
			foreignKey: 'symptomId'
		});

	};
	return Symptom;
};
