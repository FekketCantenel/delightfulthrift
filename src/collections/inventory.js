/* global define */
define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
    'models/item'
], function(_, Backbone, Store, Item) {
    'use strict';

    var Inventory = Backbone.Collection.extend({
        model: Item,
        localStorage: true
    });

    return new Inventory();
});
