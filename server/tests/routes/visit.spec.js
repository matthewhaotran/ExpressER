const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('Visits route', () => {

    it('should download all visits', (done) => {
        request(app)
            .get('/api/visit')
            .expect(200, done);
    });

    it('should fetch a single Visit', (done) => {
        request(app)
            .get('/api/visit/1')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent visit', (done) => {
        request(app)
            .get('/api/visit/9999999999999999')
            .expect(404, done);
    });

    it('should add a visit', (done) => {
        request(app)
            .post('/api/visit')
            .send({note: 'Tardis'})
            .expect(201, done);
    });

    it('should update a visit', (done) => {
        const newVisit = new db.Visit({
            note: 'Tardis'            
        });

        newVisit
            .save()
            .then(visit => {
                request(app)
                .put('/api/visit/' + visit.id)
                .send({note: 'Sonic ScrewDriver'})
                .expect(204)
                .then(() => {
                    db
                        .Visit
                        .findById(visit.id)
                        .then (visit => {
                            expect(visit.note).to.equal('Sonic ScrewDriver');

                            done();
                        });
                });
            });
    });

    it('should delete a visit', (done) => {
        const newVisit = new db.Visit({
            note: 'Sonic ScrewDriver'
        });

        newVisit.save().then(visit => {
            request(app)
                .delete('/api/visit/' + visit.id)
                .expect(204, done);
        });
    });
});
