(function(){
    var _Bacon;
    var _Backbone;

    if (typeof require !== 'undefined') {
        _Bacon = require('baconjs').Bacon;
        _Backbone = require('backbone');
    } else {
        _Bacon = Bacon;
        _Backbone = Backbone;
    }

    __slice = [].slice;

    next = function(value) {
        return new _Bacon.Next(_Bacon._.always(value));
    };

    _Backbone.Model.prototype.asEventStream = function(eventName, eventTransformer) {
        var element;
        if (typeof eventTransformer === 'undefined' || eventTransformer === null ) {
            eventTransformer = _Bacon._.id;
        }
        model = this;
        return new _Bacon.EventStream(function(sink) {
            var handler, unbind;
            handler = function() {
              var args, reply;
              args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
              reply = sink(next(eventTransformer.apply(null, args)));
              if (reply === _Bacon.noMore) {
                return unbind();
              }
            };
            unbind = function() {
              return model.off(eventName, handler);
            };
            model.on(eventName, handler);
            return unbind;
        });
    };

    if (typeof module !== 'undefined') {
        module.exports = _Backbone;
    }
}).call(this);
