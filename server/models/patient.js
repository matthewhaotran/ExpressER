'use strict';
module.exports = function (sequelize, DataTypes) {

	var Patient = sequelize.define('Patient', {
		firstName: DataTypes.STRING,
		middleName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		address1: DataTypes.STRING,
		address2: DataTypes.STRING,
		city: DataTypes.STRING,
		state: DataTypes.STRING,
		zip: DataTypes.STRING,
		mobilePhone: DataTypes.STRING,
		homePhone: DataTypes.STRING,
		workPhone: DataTypes.STRING,
		ssn: DataTypes.STRING,
		dob: DataTypes.DATE,
		consentForCare: DataTypes.BOOLEAN,
		consentForText: DataTypes.BOOLEAN

	});

	Patient.associate = function (models) {
		models.Patient.hasMany(models.PatientAllergy, {
			as: 'patientAllergies',
			foreignKey: 'patientId'
		});

		models.Patient.hasMany(models.EmergencyContact, {
			as: 'emergencyContacts',
			foreignKey: 'patientId'
		});

		models.Patient.hasMany(models.Insurance, {
			as: 'insurances',
			foreignKey: 'patientId'
		});

		models.Patient.hasMany(models.Visit, {
			as: 'visits',
			foreignKey: 'patientId'
		});


	};
	return Patient;
};
