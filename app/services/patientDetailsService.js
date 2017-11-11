var PatientDetailsService = angular.module('PatientDetailsService', [])
    .service('PatientDetails', function () {
        return {
            this:patientsDetails =  [
                {name:"test1", age:23, address:"add 01", status: "Full Time", gender: "male", bdayYear: 1991},
                {name:"test2", age:23, address:"add 01", status: "Full Time", gender: "male", bdayYear: 1991},
                {name:"test3", age:24, address:"add 01", status: "Part Time", gender: "female", bdayYear: 1992},
                {name:"test4", age:3, address:"add 02", status: "Full Time", gender: "male", bdayYear: 1991},
                {name:"test1", age:23, address:"add 02", status: "Full Time", gender: "male", bdayYear: 1992},
                {name:"test5", age:3, address:"add 01", status: "Student", gender: "female", bdayYear: 1991},
                {name:"test1", age:24, address:"add 03", status: "Full Time", gender: "male", bdayYear: 1992}
            ],

            getAllPatientsDetails: function() {
                return patientsDetails;
            },

            addNewPatientDetails: function (newDetails) {
                patientsDetails.push(newDetails);
            }

        };
    });