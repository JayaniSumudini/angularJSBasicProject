/**
 * Created by JSumudini on 11/9/2017.
 */
var app = angular.module('app',['ngRoute']);
app.controller('MainCtrl',function($scope){

});
app.config(['$routeProvider',function($routeProvider){
        $routeProvider.
        when('/', {
            templateUrl:'/components/Home/homeView.html',
            controller:'HomeCtrl'
        }).
        when('/home', {
            templateUrl:'/components/Home/homeView.html',
            controller:'HomeCtrl'
        }).
        when('/registration', {
            templateUrl:'/components/Registration/registrationView.html',
            controller:'registrationCtrl'
        }).
        otherwise( {
            redirectTo : '/home'
        });
    }]);