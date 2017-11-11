/**
 * Created by JSumudini on 11/10/2017.
 */
'use strict'
angular.module('PatientRegistration',['ngRoute','capitalizeFirst','limitNumberOfInputDigits','PatientDetailsService'])
    .config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){
    $locationProvider.hashPrefix('!');
    $routeProvider.
    when('/', {
        templateUrl:'/components/home-page/homeView.html',
        controller:'HomeCtrl'
    }).
    when('/home', {
        templateUrl:'/components/home-page/homeView.html',
        controller:'HomeCtrl'
    }).
    when('/registration', {
        templateUrl:'/components/registration-page/registrationView.html',
        controller:'RegistrationCtrl'
    }).
    otherwise( {
        redirectTo : '/home'
    });
}]);