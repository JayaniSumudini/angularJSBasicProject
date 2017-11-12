"use strict";
angular.module('dataGrid',[])
    .directive('dataGrid', function() {
        return {
            // restrict: 'AEC',
            transclude: true,
            templateUrl: 'dataGrid.html',
            link: function(scope, elem, attrs) {
                console.log("inside datagrid dir");
            }
        };
    });

