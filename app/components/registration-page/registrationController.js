"use strict";
/**
 * Created by JSumudini on 11/10/2017.
 */

var app =angular.module('PatientRegistration').controller('RegistrationCtrl', ['$scope', '$http','PatientDetails',function($scope, $http,PatientDetails){
    $scope.items = PatientDetails.getAllPatientsDetails();
    $scope.searchItems = $scope.items;
    $scope.newDataLength=true;
    $scope.bdayinvalid=false;
    $scope.errorMessage=false;
	$scope.searchTableColumns = ["Name","Age","Address","Status","Delete Row"];
    $scope.menulist = ['Delete', 'Edit', 'Add'];
    $scope.searchText = {name: "",
        bday: null,
        gender: ""
    };
    $scope.newData={};
    $scope.clearFunction = function() {
        $scope.newData = {};
    };
    $scope.getStatusKey = function (item) {
        return $scope.statuses.filter( function(status){
            if(status.text ===item.status){
                console.log(status.value);
                return status.value;
            }
        });
    };

    $scope.submit = function() {
        $scope.bdayinvalid=false;
        $scope.newData.isDeleted = false;
        var birthday = $scope.newData.bday;
        $scope.newData.age = $scope.agecal(birthday);

        PatientDetails.addNewPatientDetails($scope.newData);

        $scope.search($scope.searchText);

        $scope.newData={};
        $scope.newDataLength=true;
    };
    $scope.agecal =function(birthday){
        var mdate = $("#bday").val().toString();
        var yearThen = parseInt(mdate.substring(0,4), 10);
        var monthThen = parseInt(mdate.substring(5,7), 10);
        var dayThen = parseInt(mdate.substring(8,10), 10);

        var today = new Date();
        var birthdaynew = new Date(yearThen, monthThen-1, dayThen);
        $scope.newData.bdayYear =yearThen;
        var differenceInMilisecond = today.valueOf() - birthdaynew.valueOf();

        var year_age = Math.floor(differenceInMilisecond / 31536000000);
        var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        var month_age = Math.floor(day_age/30);
        var age = year_age+" years and " + month_age + " months";
        if(year_age<0 || month_age<0 || day_age<0){
            $scope.bdayinvalid = true;
            $scope.newData.bdayinvalid = true;
        }
        if(year_age === 0 && month_age <3){
            $scope.newData.rowcolour = true;
        }
        if(year_age<3){
            return age;
        }
        return (year_age +" years");

    };
    $scope.openMenu = function(item) {
        $scope.selected = item;
    };
    $scope.back=function () {
        window.location = "/#!/";
    };

    $scope.search = function () {
        if($scope.searchText === {name: "",bday: null, gender: ""}){
            $scope.searchItems = $scope.items;
        }else {
            $scope.searchItems = $scope.items.filter( function(item){

                if($scope.searchText.bday == null){
                    $scope.searchText.bday = "";
                }
                return (item.name.toLowerCase().indexOf($scope.searchText.name.toLowerCase())!= -1 &&
                item.gender.toLowerCase().indexOf($scope.searchText.gender.toLowerCase())!= -1 &&
                item.bdayYear.toString().indexOf($scope.searchText.bday.toString())!= -1)
            });
        }
    };

}]);