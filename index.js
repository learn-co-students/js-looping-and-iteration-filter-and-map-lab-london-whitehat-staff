// Code your solution here:
const driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter(driver => driver.revenue > revenue);
}

const driverNamesWithRevenueOver = (drivers, revenue) => {
  return driversWithRevenueOver(drivers, revenue).map(driver => {
    return driver.name;
  });
}

const exactMatch = (drivers, filter) => {
  return drivers.filter(driver => {
    for(key in filter) {
      if(driver[key] === filter[key]) {
        return true
      } else {
        return false
      }
    }
  });
}

const exactMatchToList = (drivers, filter) => {
  return exactMatch(drivers, filter).map(driver => {
    return driver.name;
  });
}