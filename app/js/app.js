/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 17.11.12
 * Time: 15:22
 */
'use strict';

define(['angular', 'utils/route-config'], function (angular, routeConfig) {

    return angular.module('myApp', [], function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
        routeConfig.setProvide($provide);
        routeConfig.setCompileProvider($compileProvider);
        routeConfig.setControllerProvider($controllerProvider);
        routeConfig.setFilterProvider($filterProvider);
    })
});
