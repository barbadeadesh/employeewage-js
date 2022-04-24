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
let empHrs = 0;

// for loop for maximum 20days

for (let day = 0; day<no_of_working_day; day++){
    let empcheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkinghours(empcheck);
}

// calulate wage according to hours 

let empWage = empHrs * wage_per_hrs;
console.log("Total Employee Hours= " +empHrs+ ":" + "Total Employee Wage =" +empWage);