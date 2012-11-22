angularjs-requirejs-lazy-controllers
====================================

Routes configuration that loads template, controller and directives using RequireJS. Files are loaded (in parallel)
when user changes the location and are displayed in Angular's ngView.

## Used libs

1. Angular 1.0.2
2. RequireJS 2.1.1
3. RequireJS text 2.0.3

## Usage

### app.js

```javascript

 return angular.module('myApp', [], function ($compileProvider, $controllerProvider) {
         routeConfig.setCompileProvider($compileProvider);
         routeConfig.setControllerProvider($controllerProvider);
     })
```

### routes.js

```javascript

 return app.config(function ($routeProvider) {
        $routeProvider.when('/view1', routeConfig.config('../partials/view1.html', 'controllers/first'));
        $routeProvider.when('/view2', routeConfig.config('../partials/view2.html', 'controllers/second', ['directives/version']));

        $routeProvider.otherwise({redirectTo:'/view1'});
    });
```

## License

MIT