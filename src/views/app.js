/* global define */
define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    'use strict';

    // Our overall **AppView** is the top-level piece of UI.
    var AppView = Backbone.View.extend({
        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: '#app'
    });

    return AppView;
});
