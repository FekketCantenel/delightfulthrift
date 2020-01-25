/* global require */
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/underscore/underscore',
        backbone: '../node_modules/backbone/backbone',
        backboneLocalstorage:
            '../node_modules/backbone-localstorage/backbone-localstorage'
    }
});

require(['backbone', 'views/app'], function(Backbone, AppView) {
    /* eslint no-new:0 */
    Backbone.history.start();

    // Initialize the application view
    new AppView();
});
