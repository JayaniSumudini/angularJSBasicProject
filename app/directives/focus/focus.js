/**
 * Created by JSumudini on 11/16/2017.
 */
"use strict";
angular.module('focus', [])
    .directive('focus', function ($parse, $timeout) {
        return {
            scope: {trigger: '@focus'},
            link: function (scope, element) {
                scope.$watch('trigger', function (value) {
                    if (value === "true") {
                        // console.log('trigger',value);
                        $timeout(function () {
                            element[0].focus();
                        });
                    }
                });
            }
        };
    });

