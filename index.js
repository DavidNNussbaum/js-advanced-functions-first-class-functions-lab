const returnFirstTwoDrivers(drivers) = () => {
  return "drivers[0], drivers[1]"
};

const returnLastTwoDrivers(drivers) = () => {
  return "drivers[-2], drivers[-1]"
};

const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()]

function createFareMultiplier(int) {
   return function() => {
      fare * int
   };
};

const fareDoubler(num) = () => {
  return createFareMultiplier(2)
};

const fareTripler(num) = () => {
    return createFareMultiplier(3)
  };
function selectDifferentDrivers(drivers, fun) {
       fun(drivers)
}:

