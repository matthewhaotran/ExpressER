const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('PatientSymptom route', () => {

    it('should download all patientSymptoms', (done) => {
        request(app)
            .get('/api/patientSymptom')
            .expect(200, done);
    });

    it('should fetch a single patientSymptom', (done) => {
        const newPatient = new db.Patient({
            firstName: 'Mack',
            lastName: 'Daddy'
        });

        const newSymptom = new db.Symptom({
            name: "headache",
            description: "pain"

        });

        newPatient
            .save()
            .then((newPatient) => {
                newSymptom
                    .save()
                    .then((newSymptom) => {
                        request(app)
                            .post('/api/patientSymptom')
                            .send({
                                patientId: newPatient.id,
                                symptomId: newSymptom.id
                            })
                            .then(res => {
                                request(app)
                                    .get('/api/patientSymptom/' + res.body.id)
                                    .expect(200, done);

                            })
                    });

            });
    });

    it('should return 404 when fetching a nonexistent patientSymptom', (done) => {
        request(app)
            .get('/api/patientSymptom/999999999')
            .expect(404, done);


    });

    it('should add a patientSymptom', (done) => {
        const newPatient = new db.Patient({
            firstName: 'Cisco',
            lastName: 'Rodriguez'
        });

        const newSymptom = new db.Symptom({
            name: "benadryl",
            description: "Oxymoron"

        });

        newPatient
            .save()
            .then(() => {
                newSymptom
                    .save()
                    .then(() => {
                        request(app)
                            .post('/api/patientSymptom')
                            .send({
                                patientId: newPatient.id,
                                newSymptomId: newSymptom.id
                            })
                            .expect(201, done);
                    });
            });

    });


    it('should update a patientSymptom', (done) => {
        const newPatientSymptom = new db.PatientSymptom({
            visitId: 1,
            symptomId: 1
        });

        newPatientSymptom
            .save()
            .then(patientSymptom => {
                request(app)
                    .put('/api/patientSymptom/' + patientSymptom.id)
                    .send({
                        visitId: 2
                    })
                    .expect(204)
                    .then(() => {
                        db
                            .PatientSymptom
                            .findById(patientSymptom.id)
                            .then(patientSymptom => {
                                expect(patientSymptom.visitId).to.equal(2);

                                done();
                            });
                    });
            });
    });

    it('should delete a patientSymptom', () => {
        const newPatientSymptom = new db.PatientSymptom({
            patientId: 2
        });
        newPatientSymptom.save().then(patientSymptom => {
            request(app)
                .delete('/api/patientSymptom' + patientSymptom.id)
                .expect(200);
        });

    });
});
