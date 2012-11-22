/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 14.11.12
 * Time: 20:21
 */

'use strict';

define(['app', 'utils/route-config'], function (app, routeConfig) {

    return app.config(function ($routeProvider) {
        $routeProvider.when('/view1', routeConfig.config('../partials/view1.html', 'controllers/first'));
        $routeProvider.when('/view2', routeConfig.config('../partials/view2.html', 'controllers/second', ['directives/version']));

        $routeProvider.otherwise({redirectTo:'/view1'});
    });

    return app;
});
