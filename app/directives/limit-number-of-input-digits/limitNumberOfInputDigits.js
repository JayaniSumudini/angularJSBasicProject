/**
 * Created by JSumudini on 11/10/2017.
 */
"use strict"
angular.module('limitNumberOfInputDigits',[])
    .directive('limitNumberOfInputDigits' , function ($parse) {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
                var limit = parseInt(attrs.limitNumberOfInputDigits);
                angular.element(elem).on("keypress", function(e) {
                    if (this.value.length == limit) {
                        e.preventDefault();
                    }
                });
            }
        }
    });