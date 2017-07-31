const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('Patients route', () => {

    it('should download all patients', (done) => {
        request(app)
            .get('/api/patient')
            .expect(200, done);
    });

    it('should fetch a single patient', (done) => {
        request(app)
            .get('/api/patient/1')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent patient', (done) => {
        request(app)
            .get('/api/patient/9999999999999999')
            .expect(404, done);
    });

    it('should add a patient', (done) => {
        request(app)
            .post('/api/patient')
            .send({firstName: 'John', lastName: 'Doe'})
            .expect(201, done);
    });

    it('should update a patient', (done) => {
        const newPatient = new db.Patient({
            firstName: 'Cisco',
            lastName: 'Rodriguez'
        });

        newPatient
            .save()
            .then(patient => {
                request(app)
                .put('/api/patient/' + patient.id)
                .send({firstName: 'Adrian'})
                .expect(204)
                .then(() => {
                    db
                        .Patient
                        .findById(patient.id)
                        .then (patient => {
                            expect(patient.firstName).to.equal('Adrian');

                            done();
                        });
                });
            });
    });

    it('should delete a patient', (done) => {
        const newPatient = new db.Patient({
            firstName: 'Cisco',
            lastName: 'Rodriguez'
        });

        newPatient.save().then(patient => {
            request(app)
                .delete('/api/patient/' + patient.id)
                .expect(204, done);
        });
    });
});
