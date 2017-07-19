const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');

const app = require('../../app');

describe('Specialityies route', () => {

    it('should download all specialties', (done) => {
        request(app)
            .get('/api/specialty')
            .expect(200, done);
    });

    it('should fetch a single Speciality', (done) => {
        request(app)
            .get('/api/specialty/1')
            .expect(200, done);
    });

    it('should return 404 when fetching a nonexistent specialty', (done) => {
        request(app)
            .get('/api/specialty/9999999999999999')
            .expect(404, done);
    });

    it('should add a specialty', (done) => {
        request(app)
            .post('/api/specialty')
            .send({specialtyName: 'John'})
            .expect(201, done);
    });

    it('should update a specialty', (done) => {
        const newSpecialty = new db.Specialty({
            specialtyName: 'BUTT DOCTOR!!!!!!!!!!'            
        });

        newSpecialty
            .save()
            .then(specialty => {
                request(app)
                .put('/api/specialty/' + specialty.id)
                .send({specialtyName: 'Sayian Specialty'})
                .expect(204)
                .then(() => {
                    db
                        .Specialty
                        .findById(specialty.id)
                        .then (specialty => {
                            expect(specialty.specialtyName).to.equal('Sayian Specialty');

                            done();
                        });
                });
            });
    });

    it('should delete a specialty', (done) => {
        const newSpecialty = new db.Specialty({
            specialtyName: 'Sayian Specialty'
        });

        newSpecialty.save().then(specialty => {
            request(app)
                .delete('/api/specialty/' + specialty.id)
                .expect(200, done);
        });
    });
});
