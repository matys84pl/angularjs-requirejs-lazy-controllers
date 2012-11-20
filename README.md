angularjs-requirejs-lazy-controllers
====================================

Routes configuration that loads both template and controller using RequireJS. Files are loaded (in parallel)
when user changes the location and are displayed in Angular's ngView.

## Used libs

1. Angular 1.0.2
2. RequireJS 2.1.1
3. RequireJS text 2.0.3

## Usage

```javascript
app.config(function ($routeProvider, $controllerProvider) {
     $routeProvider.when('/view1', routeConfig($controllerProvider, 'controllers/first', '../partials/view1.html'));
     $routeProvider.when('/view2', routeConfig($controllerProvider, 'controllers/second', '../partials/view2.html'));

     $routeProvider.otherwise({redirectTo:'/view1'});
  });
```

## License

MIT