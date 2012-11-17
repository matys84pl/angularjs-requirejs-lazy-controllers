/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 14.11.12
 * Time: 20:21
 */

'use strict';

define(['app'], function (app) {

    return app.config(function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl:'partials/view1.html'
        });
        $routeProvider.when('/view2', {
            templateUrl:'partials/view2.html',
            controllerModule:'controllers/second'
        });
        $routeProvider.otherwise({redirectTo:'/view1'});
    });

    return app;
});
