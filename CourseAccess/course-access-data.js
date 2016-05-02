var consts = require('../Common/consts.js').consts,
    utils = require('../Common/utils.js');

var generateLast = function generateLast(orgUnit, userId) {
    var results = {},
        userIds = utils.getUsers(orgUnit, userId);

    results[orgUnit] = {};
    
    for(var j = 0; j < userIds.length; j++){
        var user = userIds[j];
        results[orgUnit][user] = { "0": '/Date('+utils.getRandomLogin(consts.DATE_RANGE)+')/' };
    }
    
    return results;
};

var generate = function generate(orgUnit, roleId, start, end) {
    var results = {},
        startDate = new Date(start).setUTCHours(4,0,0,0),
        endDate = new Date(end).setUTCHours(4,0,0,0),
        dateDiff = endDate - startDate,
        roleIds = [];
        
    if (roleId){
        roleIds.push(roleId);
    }
    else {
        for(var i = 0; i < 5; i++) {
            roleIds.push((i + 578).toString());
        }
        roleIds.push("69");
    }

    results[orgUnit] = {
        "Course Offering": {}
    };
    
    numVals = Math.floor(dateDiff / consts.MS_PER_DAY);

    for(var j = 0; j < roleIds.length; j++){
        results[orgUnit]["Course Offering"][roleIds[j]] = {};
        
        for(var k = numVals; k >= 0; k--){
            results[orgUnit]["Course Offering"][roleIds[j]][endDate - consts.MS_PER_DAY * k] = (Math.round(Math.random() * 25)).toString();
        }
    }

    return results;
};

module.exports = {
    'generateLast': generateLast,
    'generate': generate
};