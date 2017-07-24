'use strict';
module.exports = function (sequelize, DataTypes) {
	var Insurance = sequelize.define('Insurance', {

		companyName: DataTypes.STRING,
		insuranceNumber: DataTypes.INTEGER,

		patientId: {
			type: DataTypes.INTEGER,
			model: 'Patient',
			key: 'id'
		}

	});

	Insurance.associate = function (models) {
		models.Insurance.belongsTo(models.Patient, {
			as: 'patient',
			foreignKey: 'patientId'
		});
	};

	return Insurance;
};
