'use strict';
module.exports = function (sequelize, DataTypes) {

	var PatientAllergy = sequelize.define('PatientAllergy', {
		patientId: {
			type: DataTypes.INTEGER,
			model: 'Patient',
			key: 'id'
		},
		allergyInfoId: {
			type: DataTypes.INTEGER,
			model: 'Allergy',
			key: 'id'
		}
	});

	PatientAllergy.associate = function (models) {

		models.PatientAllergy.belongsTo(models.AllergyInfo, {
			as: 'allergyInfo',
			foreignKey: 'allergyInfoId'
		});

		models.PatientAllergy.belongsTo(models.Patient, {
			as: 'patient',
			foreignKey: 'patientId'
		});

	};
	return PatientAllergy;
};
