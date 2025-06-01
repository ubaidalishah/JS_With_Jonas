// strict mode will only work if it is defined before all the code 
'use strict';
let hasDriversLicense = false;
let passTest = true;
if(passTest) {
    hasDriverLicense = true
    // i intendently write the variable name wrong
    // so if it was not strict mode we would not counter some error in console as hasDriverLicense is treated a new variable in non strict mode 
}
