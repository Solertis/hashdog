import {MD5} from './../src/util/MD5';
var assert = require('assert');

describe('MD5', () => {
    it('should return a correct hash', () => {
        let md5 = new MD5(),
            hash = md5.hash('tr1z'); //2655dd21148f2433763d313407d5d820

        assert.equal(hash, '2655dd21148f2433763d313407d5d820');
    });
});