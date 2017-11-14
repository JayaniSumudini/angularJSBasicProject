var PatientDetailsService = angular.module('PatientDetailsService', [])
    .service('PatientDetails', function () {
        var patientsDetails;
        return {
            this: patientsDetails = [
                {
                    name: "test1",
                    age: 23,
                    address: "add 01",
                    status: "fulltime",
                    gender: "male",
                    bdayYear: 1991,
                    pnumber: 0767290763
                },
                {
                    name: "test2",
                    age: 23,
                    address: "add 02",
                    status: "fulltime",
                    gender: "male",
                    bdayYear: 1991,
                    pnumber: 0715568742
                },
                {
                    name: "test3",
                    age: 24,
                    address: "add 01",
                    status: "fulltime",
                    gender: "female",
                    bdayYear: 1992,
                    pnumber: 0779410362
                },
                {
                    name: "test4",
                    age: 34,
                    address: "add 02",
                    status: "fulltime",
                    gender: "male",
                    bdayYear: 1991,
                    pnumber: 0765820561
                },
                {
                    name: "test1",
                    age: 23,
                    address: "add 02",
                    status: "student",
                    gender: "male",
                    bdayYear: 1992,
                    pnumber: 0719451048
                },
                {
                    name: "test2",
                    age: 34,
                    address: "add 01",
                    status: "fulltime",
                    gender: "female",
                    bdayYear: 1991,
                    pnumber: 0778204194
                },
                {
                    name: "test1",
                    age: 24,
                    address: "add 03",
                    status: "fulltime",
                    gender: "male",
                    bdayYear: 1992,
                    pnumber: 0778367249
                }
            ],

            getAllPatientsDetails: function () {
                return patientsDetails;
            },

            addNewPatientDetails: function (newDetails) {
                patientsDetails.push(newDetails);
            }

        };
    });