/**
 * Created by JSumudini on 11/10/2017.
 */
"use strict";
angular.module('capitalizeFirst', [])
    .directive('capitalizeFirst', function ($parse) {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                var capitalize = function (inputValue) {
                    if (inputValue === undefined) {
                        inputValue = '';
                    }
                    var reg = /([^\W_]+[^\s-]*) */g;
                    var capitalized = inputValue.replace(reg, function (txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    });
                    if (capitalized !== inputValue) {
                        modelCtrl.$setViewValue(capitalized);
                        modelCtrl.$render();
                    }
                    return capitalized;
                };
                modelCtrl.$parsers.push(capitalize);
                capitalize($parse(attrs.ngModel)(scope));
            }
        };
    });
