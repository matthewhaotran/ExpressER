const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('PatientAllergy route', () => {

    it('should download all patientAllergies', (done) => {
        request(app)
            .get('/api/patientAllergy')
            .expect(200, done);
    });

    it('should fetch a single patientAllergy', (done) => {
        const newPatient = new db.Patient({
            firstName: 'Mack',
            lastName: 'Daddy'
        });

        const newAllergyInfo = new db.AllergyInfo({
            allergyName: "benadryl",
            allergyDescription: "Oxymoron"

        });

        newPatient
            .save()
            .then((newPatient) => {
                newAllergyInfo
                    .save()
                    .then((newAllergyInfo)=> {
                        request(app)
                            .post('/api/patientAllergy')
                            .send({ patientId: newPatient.id , allergyInfoId: newAllergyInfo.id })
                            .then(res => {
                                request(app)
                                    .get('/api/patientAllergy/' + res.body.id)
                                    .expect(200, done);
                                    
                            })
                    });
                   
    });
    });

    it('should return 404 when fetching a nonexistent patient', (done) => {
        request(app)
            .get('/api/patientAllergy/999999999')
            .expect(404, done);


    }); 

    it('should add a patientAllergy', (done) => {
        const newPatient = new db.Patient({
            firstName: 'Cisco',
            lastName: 'Rodriguez'
        });

        const newAllergyInfo = new db.AllergyInfo({
            allergyName: "benadryl",
            allergyDescription: "Oxymoron"

        });

        newPatient
            .save()
            .then(() => {
                newAllergyInfo
                    .save()
                    .then(()=> {
                        request(app)
                        .post('/api/patientAllergy')
                        .send({ patientId: newPatient.id , newAllergyInfoId: newAllergyInfo.id })
                        .expect(201, done);
                    });
            });

    });


    it('should update a patientAllergy', (done) => {
         const newPatientAllergy = new db.PatientAllergy({
            patientId: 1,
            allergyInfoId: 1 
        });

        newPatientAllergy
            .save()
            .then(patientAllergy => {
                request(app)
                .put('/api/patientAllergy/' + patientAllergy.id)
                .send({patientId: 2})
                .expect(204)
                .then(() => {
                    db
                        .PatientAllergy
                        .findById(patientAllergy.id)
                        .then (patientAllergy => {
                            expect(patientAllergy.patientId).to.equal(2);

                            done();
                        });
                });
            });
         });

    it('should delete a patientAllergy', () => {
        const newPatientAllergy = new db.PatientAllergy({
            patientId: 2
        });
        newPatientAllergy.save().then(patientAllergy => {
            request(app)
                .delete('/api/patientAllergy' + patientAllergy.id)
                .expect(200);
        });
           
    });
});
