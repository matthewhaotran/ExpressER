const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('Doctor route', () => {

    it('should download all doctors', (done) => {
        request(app)
            .get('/api/doctor')
            .expect(200, done);
    });

    it('should fetch a single doctor', (done) => {
        request(app)
            .get('/api/doctor/1')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent doctor', (done) => {
        request(app)
            .get('/api/doctor/9999999999999999')
            .expect(404, done);
    });

    it('should add a doctor', (done) => {
        request(app)
            .post('/api/doctor')
            .send({firstName: 'John', lastName: 'Doe'})
            .expect(201, done);
    });

    it('should update a doctor', (done) => {
        const newDoctor = new db.Doctor({
            firstName: 'Cisco',
            lastName: 'Rodriguez'
        });

        newDoctor
            .save()
            .then(doctor => {
                request(app)
                .put('/api/doctor/' + doctor.id)
                .send({firstName: 'Adrian'})
                .expect(204)
                .then(() => {
                    db
                        .Doctor
                        .findById(doctor.id)
                        .then (doctor => {
                            expect(doctor.firstName).to.equal('Adrian');

                            done();
                        });
                });
            });
    });

    it('should delete a doctor', (done) => {
        const newDoctor = new db.Doctor({
            firstName: 'Cisco',
            lastName: 'Rodriguez'
        });

        newDoctor.save().then(doctor => {
            request(app)
                .delete('/api/doctor/' + doctor.id)
                .expect(200, done);
        });
    });
});
