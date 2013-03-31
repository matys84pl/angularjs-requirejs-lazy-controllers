/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 14.11.12
 * Time: 20:21
 */

'use strict';

define(['app', 'utils/route-config'], function (app, routeConfig) {

    return app.config(function ($routeProvider) {
        $routeProvider.when('/view1', routeConfig.config('../partials/view1.html', 'controllers/first', null, {directives: ['directives/version'], services: [], filters: ['filters/reverse']}));
        $routeProvider.when('/view2', routeConfig.config('../partials/view2.html', 'controllers/second', null, {directives: ['directives/version'], services: ['services/tester'], filters: []}));
        $routeProvider.when('/admin', routeConfig.config('../admin/partials/admin.html', 'controllers/second', ['controllers/third', '../admin/controllers/fourth'])); 

        $routeProvider.otherwise({redirectTo:'/view1'});
    });

    return app;
});
