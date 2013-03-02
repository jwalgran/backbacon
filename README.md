# backbacon

Get [bacon.js](https://github.com/raimohanska/bacon.js?) event streams from [Backbone](http://backbonejs.org) models

[![Build Status](https://travis-ci.org/jwalgran/backbacon.png?branch=master)](https://travis-ci.org/jwalgran/backbacon)

[![browser support](http://ci.testling.com/jwalgran/backbacon.png)](http://ci.testling.com/jwalgran/backbacon)

## methods

backbacon exports a version of Backbone with a method added to ``Backbone.Model`` If you are loading it up through an ``import`` you will call it like so:

```javascript
var Backbone = require('backbacon');
var Person = Backbone.Model.extend({});
var p = new Person({name: 'Justin'});
```

If you are loading backbacon using a ``<script>`` tag it must come after Underscore and Backbone:

```html
<script type="text/javascript" src="underscore.js"></script>
<script type="text/javascript" src="backbone.js"></script>
<script type="text/javascript" src="backbacon.js"></script>
```

### p.asEventStream(eventName, [transformFn])

Returns an ``EventStream`` of events matching the specified ``eventName``. The ``eventName`` argument can be any name you would normally pass to a ``modelInstance.on`` function like ``"change"`` or ``"change:name change:age"``

If a function is passed as the ``transformFn`` argument it will be called with the original event arguments. The value returned from ``transformFn`` will be the value that appears in the ``EventStream``.

## install

With [npm](http://npmjs.org)

    npm install backbacon

## license

MIT
