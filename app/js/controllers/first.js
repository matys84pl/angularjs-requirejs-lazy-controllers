/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 15.11.12
 * Time: 22:38
 */

'use strict';

define([], function () {

    function FirstController($scope, tester) {
        $scope.message = "I'm the 1st controller! " + tester;
        $scope.greeting = "Hello world!";

    }

    return FirstController;
});