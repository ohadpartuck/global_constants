var should              = require('chai').should(),
    global_constants    = require('../index'),
    sanger              = global_constants.sanger;

describe('sanger', function() {
    it('contains global constants', function() {
        sanger['global_constant'].should.equal({});
    });

    it('global constants is an object', function() {
        sanger['global_constant'].should.equal({});
    });
});