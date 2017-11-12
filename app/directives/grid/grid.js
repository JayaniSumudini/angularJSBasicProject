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
            console.log(this.select);
        };
    }
});