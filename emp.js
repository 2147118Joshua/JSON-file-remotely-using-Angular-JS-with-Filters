angular.module("Myemp",[])
//.filter for custom fileter , filter name and function
//it should have one paramenter thats input and option
// so when we search the number of chach will be sent to option
//applying it to the name filter where the first character should be Uppercase
.filter("myfilter",function()
{
    return function(input,option)
    {
        //Nan = Not a number or option = empty then return the full input 
        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else {
        return input.substring(0,option).toUpperCase();
    }}
    
})
.controller("empCtrl",function($scope)
{
    var employees=[
        {name:'Rithul',dob:new Date("July 21,1990"),gender:"Male",salary:50000.779},
        {name:'Indu',dob:new Date("July 20,1987"),gender:"Female",salary:80000.889},
        {name:'Kevin',dob:new Date("August 19,1983"),gender:"Male",salary:70000.778},
        {name:'Reena',dob:new Date("November 21,1989"),gender:"Female",salary:100000.778},
        {name:'Raj',dob:new Date("June 21,1980"),gender:"Male",salary:120000.667},
        {name:'Anu',dob:new Date("May 21,1990"),gender:"Female",salary:80000.776}
    ];
    $scope.employees=employees;
    $scope.rowlimit=6;
    //to change 6 rows

});