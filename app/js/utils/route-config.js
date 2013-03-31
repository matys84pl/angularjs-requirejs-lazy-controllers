/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 22.11.12
 * Time: 22:38
 */

define(['utils/lazy-directives', 'utils/lazy-services', 'utils/lazy-filters'], function (lazyDirectives, lazyServices, lazyFilters) {

    var $controllerProvider,
        $compileProvider,
        $provide,
        $filterProvider;

    function setControllerProvider(value) {
        $controllerProvider = value;
    }

    function setCompileProvider(value) {
        $compileProvider = value;
        lazyDirectives.setCompileProvider(value);
    }

    function setProvide(value) {
        $provide = value;
        lazyServices.setProvide(value);
    }

    function setFilterProvider(value) {
        $filterProvider = value;
        lazyFilters.setFilterProvider(value);
    }

    // Use this as a guide to extend... current "services" is only value provide
    // Services should use factory
    //$provide.value('a', 123);
    //$provide.factory('a', function() { return 123; });
    //$compileProvider.directive('directiveName', ...);
    //$filterProvider.register('filterName', ...);


    function config(templateUrl, controllerName, controllers, lazyResources) {
        if (!$controllerProvider) {
            throw new Error("$controllerProvider is not set!");
        }

        var defer,
            html,
            routeDefinition = {};

        routeDefinition.template = function () {
            return html;
        };
        routeDefinition.controller = controllerName;
        routeDefinition.resolve = {
            delay: function ($q, $rootScope) {
                defer = $q.defer();
                if (!html) {
                    var dependencies = ["text!" + templateUrl, controllerName];
                    if (controllers) {
                        dependencies = dependencies.concat(controllers);
                    }
                    if (lazyResources) {
                        dependencies = dependencies.concat(lazyResources.directives);
                        dependencies = dependencies.concat(lazyResources.services);
                        dependencies = dependencies.concat(lazyResources.filters);
                    }
                    require(dependencies, function () {
                        var template = arguments[0];
                        $controllerProvider.register(controllerName, arguments[1]);

                        if (controllers) {
                            for (var i = 2; i < 2 + controllers.length; i++) {
                                $controllerProvider.register(arguments[i][0], arguments[i][1]);
                            }
                        }
                        if (lazyResources) {
                            for (var i = 2 + (controllers == null ? 0 : controllers.length); i < arguments.length; i++) {

                                // TODO refactor this mess...
                                if (i === (2 + (controllers == null ? 0 : controllers.length))) {
                                    lazyDirectives.register(arguments[i]);
                                }

                                if (i === (2 + (controllers == null ? 0 : controllers.length) + 1)) {
                                    lazyServices.register(arguments[i]);
                                }

                                if (i === (2 + (controllers == null ? 0 : controllers.length) + 2)) {
                                    lazyFilters.register(arguments[i]);
                                }
                            }
                        }


                        html = template;
                        defer.resolve();
                        $rootScope.$apply()
                    })

                } else {
                    defer.resolve();
                }
                return defer.promise;
            }
        }

        return routeDefinition;
    }

    return {
        setControllerProvider: setControllerProvider,
        setCompileProvider: setCompileProvider,
        setProvide: setProvide,
        setFilterProvider: setFilterProvider,
        config: config
    }
})

