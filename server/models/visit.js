'use strict';
module.exports = function (sequelize, DataTypes) {

	var Visit = sequelize.define('Visit', {
		note: DataTypes.TEXT,
		signInTime: DataTypes.DATE,
		checkInTime: DataTypes.DATE,
		checkOutTime: DataTypes.DATE,
		painScale: DataTypes.INTEGER,
		patientId: {
			type: DataTypes.INTEGER,
			model: 'Patient',
			key: 'id'
		},
		doctorId: {
			type: DataTypes.INTEGER,
			model: 'Doctor',
			key: 'id'
		}
	});
	Visit.associate = function (models) {
		models.Visit.hasMany(models.PatientSymptom, {
			as: 'patientSymptoms',
			foreignKey: 'visitId'
		});
		models.Visit.belongsTo(models.Patient, {
			as: 'patient',
			foreignKey: 'patientId'
		});
		models.Visit.belongsTo(models.Doctor, {
			as: 'doctor',
			foreignKey: 'doctorId'
		});
	};
	return Visit;
};
