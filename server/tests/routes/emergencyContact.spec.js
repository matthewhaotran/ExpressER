const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('emergencyContacts route', () => {

    it('should download all emergencyContacts', (done) => {
        request(app)
            .get('/api/emergencyContact')
            .expect(200, done);
    });

    it('should fetch a single emergencyContact', (done) => {
        request(app)
            .get('/api/emergencyContact/1')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent emergencyContact', (done) => {
        request(app)
            .get('/api/emergencyContact/9999999999999999')
            .expect(404, done);
    });

    it('should add a emergencyContact', (done) => {
        request(app)
            .post('/api/emergencyContact')
            .send({firstName: 'John', lastName: 'Doe'})
            .expect(201, done);
    });

    it('should update a emergencyContact', (done) => {
        const newemergencyContact = new db.EmergencyContact({
            firstName: 'Cisco',
            lastName: 'Rodriguez'
        });

        newemergencyContact
            .save()
            .then(emergencyContact => {
                request(app)
                .put('/api/emergencyContact/' + emergencyContact.id)
                .send({firstName: 'Adrian'})
                .expect(204)
                .then(() => {
                    db
                        .EmergencyContact
                        .findById(emergencyContact.id)
                        .then (emergencyContact => {
                            expect(emergencyContact.firstName).to.equal('Adrian');

                            done();
                        });
                });
            });
    });

    it('should delete a emergencyContact', (done) => {
        const newemergencyContact = new db.EmergencyContact({
            firstName: 'Cisco',
            lastName: 'Rodriguez'
        });

        newemergencyContact.save().then(emergencyContact => {
            request(app)
                .delete('/api/emergencyContact/' + emergencyContact.id)
                .expect(200, done);
        });
    });
});
