const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('Symptoms route', () => {

    it('should download all symptons', (done) => {
        request(app)
            .get('/api/symptom')
            .expect(200, done);
    });

    it('should fetch a single symptom', (done) => {
        request(app)
            .get('/api/symptom/1')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent symptom', (done) => {
        request(app)
            .get('/api/symptom/9999999999999999')
            .expect(404, done);
    });

    it('should add a symptom', (done) => {
        request(app)
            .post('/api/symptom')
            .send({name: 'statefarm', priority: 'urgent', description: 'health'})
            .expect(201, done);
    });

    it('should update a symptom', (done) => {
        const newSymptom = new db.Symptom({
            name: 'statefarm',
            priority: 'urgent',
            description: 'health'
        });

        newSymptom
            .save()
            .then(symptom => {
                request(app)
                .put('/api/symptom/' + symptom.id)
                .send({name: 'Adrian'})
                .expect(204)
                .then(() => {
                    db
                        .Symptom
                        .findById(symptom.id)
                        .then (symptom => {
                            expect(symptom.name).to.equal('Adrian');

                            done();
                        });
                });
            });
    });

    it('should delete a symptom', (done) => {
        const newSymptom = new db.Symptom({
            name: 'Cisco',
            priority: 'Rodriguez',
            description: 'health'
        });

        newSymptom.save().then(symptom => {
            request(app)
                .delete('/api/symptom/' + symptom.id)
                .expect(200, done);
        });
    });
});
