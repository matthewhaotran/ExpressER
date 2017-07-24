'use strict';
module.exports = function (sequelize, DataTypes) {

	var EmergencyContact = sequelize.define('EmergencyContact', {
		relationship: DataTypes.STRING,
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		mobilePhone: DataTypes.STRING,
		patientId: {
			type: DataTypes.INTEGER,
			model:'Patient',
			key:'id'
		}

	});

	EmergencyContact.associate = function (models) {
		models.EmergencyContact.belongsTo(models.Patient, {
			as: 'patient',
			foreignKey: 'patientId'
		});


	};
	return EmergencyContact;
};
