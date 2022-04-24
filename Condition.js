/**
  * declare a constatnt  variable 
  */
 const absent = 0 
 const part_time = 1;
 const full_time = 2;
const part_time_hrs = 4;
const full_time_hrs = 8; 
const wage_per_hrs = 20;
const no_of_working_day = 20;
const max_hrs_in_month = 100;
// create a function for working hours 

function getWorkinghours(empcheck){
    switch(empcheck){
        case part_time:
            return part_time_hrs;
        case full_time:
            return full_time_hrs;
        default:
            return 0;
    }
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= max_hrs_in_month && totalWorkingDays < no_of_working_day) {
    totalWorkingDays++;
    let empcheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkinghours(empcheck);
}

let empWage = totalEmpHrs * wage_per_hrs;

console.log("Total Working days: " +totalWorkingDays);
console.log("Total Employee Hours= " +totalEmpHrs);
console.log("Total Employee Wage =" +empWage);