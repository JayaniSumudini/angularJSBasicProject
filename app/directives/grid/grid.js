'use strict';
angular.module('searchGrid', []).component('searchGrid', {
	templateUrl: 'directives/grid/grid.html',
	bindings: {
        itemvalue: '<',
        columns:'=',
        data:'=',
        fillDetails:'&'
	},
    controller: function($q, $timeout) {
        this.$onInit = function() {
        };
        this.details=function (item) {
			// this.fillDetails({this.item})
			this.itemvalue = item;
			console.log(this.itemvalue);
        }
    }
});