/* global define */
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    'use strict';

    var ItemView = Backbone.View.extend({
        tagName: 'li',

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'visible', this.toggleVisible);
        },

        render: function() {
            const { ...item } = this.model.toJSON();
            item.colorname = item.color
                .replace(/([A-Z])/g, ' $&')
                .toLowerCase();

            return (
                '<span style="color: ' +
                item.color +
                '">' +
                item.colorname +
                ' ' +
                item.type +
                '</span><br />'
            );
        }
    });

    return ItemView;
});
