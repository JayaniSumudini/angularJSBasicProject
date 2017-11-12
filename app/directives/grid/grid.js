'use strict';
angular.module('searchGrid', []).component('searchGrid', {
	templateUrl: 'directives/grid/grid.html',
	bindings: {
        columns:'=',
        data:'=',
        select: '='

    },
    controller: function($q, $timeout) {
        this.$onInit = function() {
        };
        this.fillDetails=function(item){
            this.select = item;
        };
        this.options = [
            {value: 1, text: "Full Time"},
            {value: 2, text: "Part Time"},
            {value: 3, text: "Retired"},
            {value: 4, text: "Student"},
            {value: 5, text: "Unemployed"}
        ];
    }
});