import {app} from '../app';
import chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
const expect = chai.expect;
describe('Suggetions Test', () => {  //creating tests

    
/*
  * Test 1:-  To get suggetion without any params. it should not contain any data in it
  */
  describe('/GET suggetions without param', () => {
      it('it should GET 0 suggetions ', (done) => {
        chai.request(app)
            .get('/suggetions')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.suggestions.should.be.a('array');
                  res.body.suggestions.length.should.be.eql(0);
              done();
            });
      });
  });
   
/*
  * Test 2:-  To get suggetion with only q param. and istance should be null as there is no poing provided in params
  */
  describe('/GET suggetions with only \'q\' param', () => {
    it('it should GET 2 suggetions ', (done) => {
      chai.request(app)
          .get('/suggetions?q=Oko')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.suggestions.should.be.a('array');
                res.body.suggestions.length.should.be.eql(2);
                res.body.suggestions[1].name.should.be.eql("Okotoks");
                // res.body.suggestions[1].distance.should.be.eql("null");
                should.equal(res.body.suggestions[1].distance, null);
            done();
          });
    });
});

/*
  * Test 3:-  To get suggetion with each param. It should suggest data with all fileds 
  */
describe('/GET suggetions with param', () => {
    it('it should GET suggetions with all filters', (done) => {
      chai.request(app)
          .get('/suggetions?q=Lak&latitude=43.70011&longitude=-79.4163&radius=5&sort=name')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.suggestions.should.be.a('array');
                res.body.suggestions[1].name.should.be.eql("Lakeview");
                expect(res.body.suggestions[1].distance).to.have.lessThan(5);
                expect(res.body.suggestions[2].distance).to.have.lessThan(5);
                expect(res.body.suggestions[0].distance).to.have.lessThan(5);
            done();
          });
    });
});

});