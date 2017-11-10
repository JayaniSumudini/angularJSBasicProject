/**
 * Created by JSumudini on 11/10/2017.
 */
var app =angular.module('PatientRegistration').controller('RegistrationCtrl', ['$scope', '$http', function($scope, $http){
    $scope.items = [{name:"test1", age:23, address:"add 01", status: "Full Time", gender: "male", bdayYear: 1991},
        {name:"test2", age:23, address:"add 01", status: "Full Time", gender: "male", bdayYear: 1991},
        {name:"test3", age:24, address:"add 01", status: "Full Time", gender: "female", bdayYear: 1992},
        {name:"test4", age:3, address:"add 02", status: "Full Time", gender: "male", bdayYear: 1991},
        {name:"test1", age:23, address:"add 02", status: "Full Time", gender: "male", bdayYear: 1992},
        {name:"test5", age:3, address:"add 01", status: "Full Time", gender: "female", bdayYear: 1991},
        {name:"test1", age:24, address:"add 03", status: "Full Time", gender: "male", bdayYear: 1992}];
    $scope.searchItems = $scope.items;
    $scope.newDataLength=true;
    $scope.errorMessage=false;
    $scope.menulist = ['Delete', 'Edit', 'Add'];
    $scope.statuses = [
        {value: 1, text: "Full Time"},
        {value: 2, text: "Part Time"},
        {value: 3, text: "Retired"},
        {value: 4, text: "Student"},
        {value: 5, text: "Unemployed"}
    ];
    $scope.searchText = {name: "",
        bday: null,
        gender: ""
    };
    $scope.newData=[];
    $scope.clearFunction = function() {

    };
    $scope.submit = function() {
        var birthday = $scope.newData.bday;
        $scope.newData.age = $scope.agecal(birthday);
        $scope.items.push($scope.newData);
        $scope.search($scope.searchText);

        $scope.newData=[];
        $scope.statusgroup=["Full Time","parttime","retired","student","unemployed"];
        $scope.newDataLength=true;
    };
    $scope.agecal =function(birthday){
        // var birthday = new Date(birthday);
        // var today = new Date();
        // var age = ((today - birthday) / (31557600000));
        // var ageprint = Math.floor( age );
        // if(ageprint<3){
        //
        // }
        // return ageprint;
        var mdate = $("#bday").val().toString();
        var yearThen = parseInt(mdate.substring(0,4), 10);
        var monthThen = parseInt(mdate.substring(5,7), 10);
        var dayThen = parseInt(mdate.substring(8,10), 10);

        var today = new Date();
        var birthdaynew = new Date(yearThen, monthThen-1, dayThen);
        // console.log(yearThen);
        $scope.newData.bdayYear =yearThen;
        var differenceInMilisecond = today.valueOf() - birthdaynew.valueOf();

        var year_age = Math.floor(differenceInMilisecond / 31536000000);
        var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        var month_age = Math.floor(day_age/30);
        var age = year_age+" years and " + month_age + " months";
        if(year_age === 0 && month_age <3){
            console.log("red");
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
    $scope.fillDetails= function(item) {
        $scope.newData = item;
    };
    $scope.remove = function () {
    };
    $scope.back=function () {
        window.location = "/#!/";
    };

    $scope.search = function () {
        console.log($scope.searchText);
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
            })
        }
    }
}]);

// app.directive('capitalizeFirstWord', function($parse) {
//     return {
//         require: 'ngModel',
//         link: function(scope, element, attrs, modelCtrl) {
//             var capitalize = function(inputValue) {
//                 if (inputValue === undefined) { inputValue = ''; }
//                 var reg = /([^\W_]+[^\s-]*) */g ;
//                 var capitalized = inputValue.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//                 if(capitalized !== inputValue) {
//                     modelCtrl.$setViewValue(capitalized);
//                     modelCtrl.$render();
//                 }
//                 return capitalized;
//             };
//             modelCtrl.$parsers.push(capitalize);
//             capitalize($parse(attrs.ngModel)(scope)); // capitalize initial value
//         }
//     };
// });