var should              = require('chai').should(),
    global_constants    = require('../index'),
    sanger              = global_constants['sanger'];

describe('sanger', function() {
    it('contains constants', function() {
        sanger['sanger_constants'].should.not.equal({});

    });

    it('constants are a type of an object', function() {
        sanger['sanger_constants'].should.be.an.instanceOf(Object);
    });
});