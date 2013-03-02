var test = require('tape');
var Backbone = require('./backbacon');

test('Backbone.Model has an asEventStream method', function (t) {
    var m = new Backbone.Model({});
    t.ok(typeof m.asEventStream === 'function', 'all backbone models have an asEventStream method');
    t.end();
});

test('model events show up in the event stream', function (t) {
    t.plan(1);
    var m = new Backbone.Model({});
    var changes = m.asEventStream('change');
    changes.onValue(function(model) {
        t.equal(m, model, 'model was passed to the event stream on change');
    });
    m.set('foo', 'bar');
});