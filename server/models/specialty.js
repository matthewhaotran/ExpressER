'use strict';
module.exports = function (sequelize, DataTypes) {

	var Specialty = sequelize.define('Specialty', {
		specialtyName: DataTypes.STRING,
		specialtyDescription: DataTypes.STRING
	});

	Specialty.associate = function (models) {
		models.Specialty.hasMany(models.Doctor, {
			as: 'doctors',
			foreignKey: 'specialtyId'
		});
	};
	return Specialty;
};
