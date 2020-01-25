/* global define */
define(['underscore', 'backbone'], function(_, Backbone) {
    'use strict';

    var Item = Backbone.Model.extend({
        defaults: {
            type: 'book',
            color: 'white'
        }
    });

    return Item;
});
