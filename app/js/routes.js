/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 14.11.12
 * Time: 20:21
 */

'use strict';

define(['app'], function (app) {

    function routeConfig(controllerProvider, controllerName, templateUrl) {
        var defer,
            html,
            routeDefinition = {};

        routeDefinition.template = function () {
            return html;
        };
        routeDefinition.controller = controllerName;
        routeDefinition.resolve = {
            delay:function ($q,  $rootScope) {
                defer = $q.defer();
                if (!routeDefinition.html) {

                    require([controllerName, "text!" + templateUrl], function (controller, template) {
                        controllerProvider.register(controllerName, controller);
                        html = template;
                        defer.resolve(true);
                        $rootScope.$apply()
                    })

                } else {
                    defer.resolve(true);
                }
                return defer.promise;
            }
        }

        return routeDefinition;
    }

    return app.config(function ($routeProvider, $controllerProvider) {
        $routeProvider.when('/view1', routeConfig($controllerProvider, 'controllers/first', '../partials/view1.html'));
        $routeProvider.when('/view2', routeConfig($controllerProvider, 'controllers/second', '../partials/view2.html'));

        $routeProvider.otherwise({redirectTo:'/view1'});
    });

    return app;
});
