const assert = require('assert');
import fetch from 'isomorphic-fetch';
import { AccountService } from '../src/app/account.service';

describe('AccountService', function() {
  describe('Create', function() {
    it('should create an account and return OK', function(done) {
        let account = {};
        AccountService.create(account).then(result => { 
            assert.equal(result.ok, true);
            done();
        });
    });
  });
});