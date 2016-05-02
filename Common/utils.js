var consts = require('./consts.js').consts;

var getRandomLogin = function getRandomLogins(dateRange) {
    var day = new Date(),
        randomOffset = Math.round(Math.random() * dateRange);
        
    return day.setDate(day.getDate() - randomOffset).toString(); 
};

var getRandomGrade = function getRandomGrade() {
    return Math.round(Math.random() * 10000) / 10000;
};

var getUsers = function getUsers(orgUnit, userId){
    return userId ? [userId] : ((orgUnit === "121868") ? consts.USER_IDS.LARGE : consts.USER_IDS.SMALL);
};

var parseDates = function(startDate, endDate){
    var startTime = startDate === undefined ? 
            Math.max(0, new Date().getTime() - consts.MS_PER_DAY * consts.NUM_DAYS) : 
            parseInt(startDate),
            
        endTime = endDate === undefined ? 
            new Date().getTime() : 
            parseInt(endDate);
            
    return {
        "startTime":startTime, 
        "endTime":endTime
    };
};


module.exports = {
    'getRandomLogin': getRandomLogin,
    'getRandomGrade': getRandomGrade,
    'getUsers': getUsers,
    'parseDates': parseDates
};