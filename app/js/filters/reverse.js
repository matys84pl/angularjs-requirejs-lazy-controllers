/**
 * Created with JetBrains WebStorm.
 * User: avivcallander
 * Date: 3/31/13
 * Time: 4:40 PM
 * To change this template use File | Settings | File Templates.
 */


'use strict';

define([], function () {

    return ['reverse', function() {
        return function(input, uppercase) {
            var out = "";
            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            // conditional based on optional argument
            if (uppercase) {
                out = out.toUpperCase();
            }
            return out;
        }}];
})


