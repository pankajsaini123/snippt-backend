const moment = require('moment')
const momenttz = require('moment-timezone')
const timeZone = 'Asia/Calcutta'
let now = () => {
  return moment.utc().format()
}

let getLocalTime = () => {
  return moment().tz(timeZone).format()
}

let convertToLocalTime = (time) => {
  return momenttz.tz(time, timeZone).format('LLLL')
}

let isSameDayAsToday = (inputDate) => {
  //console.log(new Date(inputDate).getUTCDate())
  //console.log(new Date().getDate())
  
  //console.log(new Date(inputDate))
  //console.log(moment().utc().format())

  if(new Date(inputDate).getUTCDate() == new Date().getUTCDate() && new Date() < new Date(inputDate) ){
    return true
  }
  else{
    return false
  }
}

module.exports = {
  now: now,
  getLocalTime: getLocalTime,
  convertToLocalTime: convertToLocalTime,
  isSameDayAsToday:isSameDayAsToday
}