const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('Insurances route', () => {

    it('should download all insurance', (done) => {
        request(app)
            .get('/api/insurance')
            .expect(200, done);
    });

    it('should fetch a single insurance', (done) => {
        request(app)
            .get('/api/insurance/1')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent insurance', (done) => {
        request(app)
            .get('/api/insurance/9999999999999999')
            .expect(404, done);
    });

    it('should add a insurance', (done) => {
        request(app)
            .post('/api/insurance')
            .send({companyName: 'John'})
            .expect(201, done);
    });

    it('should update a insurance', (done) => {
        const newInsurance = new db.Insurance({
            companyName: 'Cisco'
        });

        newInsurance
            .save()
            .then(insurance => {
                request(app)
                .put('/api/insurance/' + insurance.id)
                .send({companyName: 'Adrian'})
                .expect(204)
                .then(() => {
                    db
                        .Insurance
                        .findById(insurance.id)
                        .then (insurance => {
                            expect(insurance.companyName).to.equal('Adrian');

                            done();
                        });
                });
            });
    });

    it('should delete a insurance', (done) => {
        const newInsurance = new db.Insurance({
            companyName: 'Cisco'
        });

        newInsurance.save().then(insurance => {
            request(app)
                .delete('/api/insurance/' + insurance.id)
                .expect(200, done);
        });
    });
});
