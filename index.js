// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  let driverNames = drivers.filter(driver => driver.revenue > revenue)
  return driverNames;
};

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => {
    return driver.name
  });
};

//this needs two returns because the statement cannot be done in one return. we must return the initial value, then we can use that to get the next value. this needed to be done in one function to pass the test.

function exactMatch(drivers, array) {
  return drivers.filter(driver => {
    for(key in array) {
      if(driver[key] === array[key]){
        return true;
      };
    };
  });
};

function exactMatchToList(drivers, array) {
  return exactMatch(drivers, array).map(driver => {
    return driver.name;
  });
};