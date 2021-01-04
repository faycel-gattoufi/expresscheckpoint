const moment = require("moment");
const beginTime = moment("8:00 am", "HH:mm a");
const endTime = moment("18:00 pm", "HH:mm a");
const startingDay = 1;
const endingDay = 5;
console.log(moment);
const checkTime = (req, res, next) => {
  let currentTime = moment();
  let currentDay = moment().day();
  if (
    currentTime.isBetween(beginTime, endTime) &&
    currentDay >= startingDay &&
    currentDay <= endingDay
  ) {
    next();
  } else {
    console.log(" Off Service!");
    res.status(404).send("Off service: working only on Monday to Friday from 08:00 to 18:00");
  }
};
module.exports = checkTime;
