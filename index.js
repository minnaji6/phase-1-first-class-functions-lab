// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

// returnLastTwoDrivers
const returnLastTwoDrivers = (drivers) =>  drivers.slice(-2)

// selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

// createFareMultiplier

function createFareMultiplier (int=1) {
    return function (FareMultiplier = 10) {
    return (int * FareMultiplier) }

}
// fareDoubler
const fareDoubler = createFareMultiplier (2)
   
// fareTripler
const fareTripler = createFareMultiplier (3)

// selectDifferentDrivers
const selectDifferentDrivers = (drivers, altDrivers) => altDrivers(drivers)