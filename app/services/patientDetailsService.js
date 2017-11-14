var PatientDetailsService = angular.module('PatientDetailsService', [])
    .service('PatientDetails', function () {
        return {
            this: patientsDetails = [
                {
                    name: "test1",
                    age: 23,
                    address: "add 01",
                    status: "fulltime",
                    gender: "male",
                    bdayYear: 1991,
                    pnumber: 0767290763,
                    bday: new Date('12/23/1992')
                },
                {
                    name: "test2",
                    age: 23,
                    address: "add 02",
                    status: "parttime",
                    gender: "male",
                    bdayYear: 1991,
                    pnumber: 0715568742,
                    bday: new Date('01/13/1992')
                },
                {
                    name: "test3",
                    age: 24,
                    address: "add 01",
                    status: "retired",
                    gender: "female",
                    bdayYear: 1992,
                    pnumber: 0779410362,
                    bday: new Date('06/03/1991')
                },
                {
                    name: "test4",
                    age: 34,
                    address: "add 02",
                    status: "parttime",
                    gender: "male",
                    bdayYear: 1991,
                    pnumber: 0765820561,
                    bday: new Date('04/15/1981')
                },
                {
                    name: "test1",
                    age: 23,
                    address: "add 02",
                    status: "student",
                    gender: "male",
                    bdayYear: 1992,
                    pnumber: 0719451048,
                    bday: new Date('05/25/1992')
                },
                {
                    name: "test2",
                    age: 34,
                    address: "add 01",
                    status: "unemployed",
                    gender: "female",
                    bdayYear: 1991,
                    pnumber: 0778204194,
                    bday: new Date('02/13/1980')
                },
                {
                    name: "test1",
                    age: 24,
                    address: "add 03",
                    status: "fulltime",
                    gender: "male",
                    bdayYear: 1992,
                    pnumber: 0778367249,
                    bday: new Date('10/11/1991')
                }
            ],

            getAllPatientsDetails: function() {
                return patientsDetails;
            },

            addNewPatientDetails: function (newDetails) {
                if(newDetails.name==null||newDetails.bday ==null||newDetails.gender == null||newDetails.bdayinvalid){
                    console.log(newDetails);
                    console.log("error");
                }else{
                    console.log(newDetails);
                    patientsDetails.push(newDetails);
                }

            }

        };
    });