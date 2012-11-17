/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 16.11.12
 * Time: 21:28
 */
'use strict';

define(['app'], function (app) {

    app.directive('mbLazyController', ['$controller', '$compile', function ($controller, $compile) {
        return {
            restrict:'A',
            scope:true,
            link:function (scope, element, attr) {
                var controller,
                    locals = {$scope:scope},
                    controllerModule = attr.mbLazyController,
                    onLoadExp = attr.onload || '';

                require([controllerModule], function (constructor) {
                    controller = $controller(constructor, locals);
                    element.contents().data('$ngControllerController', controller);
                    $compile(element.contents())(scope);
                    scope.$apply();
                    scope.$emit('$viewContentLoaded');
                    scope.$eval(onLoadExp);
                })
            }
        };
    }]);

    app.directive('mbLazyControllerView',
        ['$http', '$templateCache', '$route', '$anchorScroll', '$compile', '$controller',
            function ($http, $templateCache, $route, $anchorScroll, $compile, $controller) {
                return {
                    restrict:'ECA',
                    terminal:true,
                    link:function (scope, element, attr) {
                        var lastScope,
                            onLoadExp = attr.onload || '';

                        scope.$on('$routeChangeSuccess', update);
                        update();


                        function destroyLastScope() {
                            if (lastScope) {
                                lastScope.$destroy();
                                lastScope = null;
                            }
                        }

                        function clearContent() {
                            element.html('');
                            destroyLastScope();
                        }

                        function update() {
                            var locals = $route.current && $route.current.locals,
                                template = locals && locals.$template;

                            if (template) {
                                destroyLastScope();

                                var current = $route.current,
                                    controller;

                                lastScope = current.scope = scope.$new();
                                locals.$scope = lastScope;

                                if (current.controller) {
                                    element.html(template);
                                    controller = $controller(current.controller, locals);
                                    complete(lastScope, controller);
                                } else if (current.controllerModule) {
                                    require([current.controllerModule], function (controllerConstructor) {
                                        element.html(template);
                                        controller = $controller(controllerConstructor, locals);
                                        complete(lastScope, controller);
                                        lastScope.$apply();
                                    });
                                } else {
                                    element.html(template);
                                    $compile(element.contents())(lastScope);
                                }


                            } else {
                                clearContent();
                            }
                        }

                        function complete(scope, controller) {
                            element.contents().data('$ngControllerController', controller);
                            $compile(element.contents())(scope);
                            scope.$emit('$viewContentLoaded');
                            scope.$eval(onLoadExp);

                            // $anchorScroll might listen on event...
                            $anchorScroll();
                        }
                    }
                };
            }]);


    return app;
});
