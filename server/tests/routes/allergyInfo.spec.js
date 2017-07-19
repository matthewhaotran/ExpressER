const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('AllergyInfo route', () => {

    it('should download all allergyInfo', (done) => {
        request(app)
            .get('/api/allergyInfo')
            .expect(200, done);
    });

    it('should fetch a single allergyInfo', (done) => {
        request(app)
            .get('/api/allergyInfo/1')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent allergyInfo', (done) => {
        request(app)
            .get('/api/allergyInfo/9999999999999999')
            .expect(404, done);
    });

    it('should add an allergyInfo', (done) => {
        request(app)
            .post('/api/allergyInfo')
            .send({allergyName: 'chupacabra', allergyDescription:'bleeding'})
            .expect(201, done);
    });

    it('should update a allergyInfo', (done) => {
        const newAllergyInfo = new db.AllergyInfo({
            allergyName: 'benadryl',
            allergyDescription: 'turn blue'
        });

        newAllergyInfo
            .save()
            .then(allergyInfo => {
                request(app)
                .put('/api/allergyInfo/' + allergyInfo.id)
                .send({allergyName: 'flowers'})
                .expect(204)
                .then(() => {
                    db
                        .AllergyInfo
                        .findById(allergyInfo.id)
                        .then (allergyInfo => {
                            expect(allergyInfo.allergyName).to.equal('flowers');

                            done();
                        });
                });
            });
    });

    it('should delete a allergyInfo', (done) => {
        const newAllergyInfo = new db.AllergyInfo({
            allergyName: 'Cisco'    
        });

        newAllergyInfo.save().then(allergyInfo => {
            request(app)
                .delete('/api/allergyInfo/' + allergyInfo.id)
                .expect(200, done);
        });
    });
});
