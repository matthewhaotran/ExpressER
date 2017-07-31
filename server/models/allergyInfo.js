'use strict';
module.exports = function (sequelize, DataTypes) {

	var AllergyInfo = sequelize.define('AllergyInfo', {
		allergyName: DataTypes.STRING,
		allergyDescription: DataTypes.STRING
	});

	AllergyInfo.associate = function (models) {
		models.AllergyInfo.hasMany(models.PatientAllergy, {
			as: 'patientAllergies',
			foreignKey: 'allergyInfoId'
		});

        
	};
	return AllergyInfo;
};
