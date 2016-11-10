import helper from '../../test/helper.js';
import app from '../index.js';
import chai from 'chai';
import chaiHttp from 'chai-http';
import {request, expect} from 'chai';

chai.use(chaiHttp);

describe('Authentication', function() {
  describe('.local - POST /authentication', function() {
    it('authentication failed', function(done) {
      request(app)
        .post('/authentication')
        .set('token', helper.user.token)
        .field('email', helper.user.email)
        .field('password', helper.user.invalidPassword)
        .end(function(err, res) {
          expect(res.statusCode).to.equal(401);
          expect(res.body).to.have.property('message', 'authentication failed');
          done();
        });
    });

    it('authentication success', function(done) {
      request(app)
        .post('/authentication')
        .set('token', helper.user.token)
        .field('email', helper.user.email)
        .field('password', helper.user.password)
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.property('id', helper.user._id.toString());
          expect(res.body).to.have.property('token');
          done();
        });
    });
  });
});
