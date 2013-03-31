/**
 * Created with IntelliJ IDEA.
 * User: Mateusz
 * Date: 22.11.12
 * Time: 22:04
 */

'use strict';

define([], function () {

    return ['appVersion', function () {
        return function (scope, elm, attrs) {
            elm.text("1.0.0");
        }
    }]
})