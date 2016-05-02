var consts = require('../Common/consts.js').consts,
    utils = require('../Common/utils.js');

var generate = function generate(orgUnit, start, end) {
    var results = {},
        startDate = new Date(start).setUTCHours(5,0,0,0),
        endDate = new Date(end).setUTCHours(5,0,0,0),
        dateDiff = endDate - startDate,
        userIds = utils.getUsers(orgUnit);

    results[orgUnit] = {};
    
    numVals = Math.floor(dateDiff / consts.MS_PER_DAY);

    for(var j = 0; j < userIds.length; j++){
        results[orgUnit][userIds[j]] = {};
        
        for(var k = numVals; k >= 0; k--){
            results[orgUnit][userIds[j]][endDate - consts.MS_PER_DAY * k] = (Math.round(Math.random() * 25)).toString();
        }
    }

    return results;
};

module.exports = {
    'generate': generate
};