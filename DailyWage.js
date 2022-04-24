/**
  * declare a constatnt  variable 
  */
 const absent = 0 
 const part_time = 1;
 const full_time = 2;
const part_time_hrs = 4;
const full_time_hrs = 8; 
const wage_per_hrs = 20;
 
 /**
  * Write a function for random number
  */
 let empcheck = Math.floor(Math.random() * 10) %2;

 
 if(empcheck == absent) {
     console.log("Employee is Absent");
     }
 else{
     console.log("Employee is present");
 }

 //check the employee is part time or full time 

 let emphrs = 0;

 let empheck = Math.floor (Math.random() *10) % 3 ;

 switch(empcheck){
     case 1: part_time:
         emphrs = part_time_hrs;
         break;
     case 2: full_time:
         emphrs = full_time_hrs;
         break;
         
     default :
              emphrs = 0;    
 }

 //calculate wage according to situtaion

 let empwage = emphrs * wage_per_hrs;
 console.log("wage of employee accoring to situtation is :" +empwage)

