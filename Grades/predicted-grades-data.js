var utils = require('../Common/utils.js');

var generate = function generate(orgUnit, userId) {
    var results = {},
        userIds = utils.getUsers(orgUnit, userId);

    results[orgUnit] = {};
    
    for(var modelId = 0; modelId < 3; modelId++){
        results[orgUnit][modelId] = {};
        for(var week = 1; week < 4; week++){
            results[orgUnit][modelId][week] = {};
            for(var j = 0; j < userIds.length; j++){
                var user = userIds[j];
                results[orgUnit][modelId][week][user] = { "0": utils.getRandomGrade().toString() };
            }
        }
    }
    
    return results;
};

module.exports = {
    'generate': generate
};