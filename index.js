// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    [] 
    return drivers.slice(0,2) 
}
// returnLastTwoDrivers
const returnLastTwoDrivers = (lastTwoDrivers) => {
    []
    return lastTwoDrivers.slice(-2)
}
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
const selectDifferentDrivers =  function (drivers, altDrivers) {
    return altDrivers(drivers);
}