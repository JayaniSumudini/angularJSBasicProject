'use strict';
angular.module('searchGrid', []).component('searchGrid', {
    templateUrl: 'directives/grid/grid.html',
    bindings: {
        columns: '=',
        data: '=',
        select: '='
    },
    controller: function ($q, $timeout) {
        this.$onInit = function () {
        };
        this.fillDetails = function (item) {
            this.select = item;
        };
        this.options = [
            {value: "fulltime", text: "Full Time"},
            {value: "parttime", text: "Part Time"},
            {value: "retired", text: "Retired"},
            {value: "student", text: "Student"},
            {value: "unemployed", text: "Unemployed"}
        ];
    }
});
