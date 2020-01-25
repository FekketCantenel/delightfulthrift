/* global define, colors, types */
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/inventory',
    'models/item',
    'views/item',
    'tables/colors',
    'tables/types'
], function($, _, Backbone, Inventory, Item, ItemView) {
    'use strict';

    var AppView = Backbone.View.extend({
        el: '#app',
        initialize: function() {
            this.listenTo(Inventory, 'add', this.addOne);
            this.start();
        },
        start: function() {
            this.interval = setInterval(function() {
                Inventory.add(
                    new Item({
                        color:
                            colors[Math.floor(Math.random() * colors.length)],
                        type: types[Math.floor(Math.random() * types.length)]
                    })
                );
            }, 1000);

            return this;
        },
        addOne: function(item) {
            var view = new ItemView({ model: item });
            this.$el.append(view.render());
        }
    });

    return AppView;
});
