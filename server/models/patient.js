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
        models.Patient.hasMany(models.patientAllergy, {
            as: 'patientAllergies',
            foreignKey: 'patientAllergyId'
        });

        models.Patient.hasMany(models.emergencyContact, {
            as: 'emergencyContacts',
            foreignKey: 'emergencyContactId'
        });

        models.Patient.hasMany(models.insurance, {
            as: 'insurances',
            foreignKey: 'insuranceId'
        });

        models.Patient.hasMany(models.visit, {
            as: 'visits',
            foreignKey: 'visitId'
        });


    };
    return Patient;
};
