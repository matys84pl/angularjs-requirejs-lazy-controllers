angularjs-requirejs-lazy-controllers
====================================

Modified AngularJS' ngView and ngController directives to enable support for lazy loading of controllers using RequireJS.

My custom directives are:

<b>mb-lazy-controller-view</b> - this is a modified version of Angular's <i>ng-view</i>, when you specify <i>controllerModule</i> property in your routes
it will load the module (with the controller) using require and apply it to the partial

<b>mb-lazy-controller</b> - when used as an attribute will load specified module (with the controller) using require and apply it to the element, like the <i>ng-controller</i> normally does.
It can be used within the partial, but only with <i>mb-lazy-controller-view</i>
