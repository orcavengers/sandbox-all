var consts = require('../Common/consts.js').consts,
    utils = require('../Common/utils.js');

var generate = function generate(orgUnit, userId) {
    var results = {},
        userIds = utils.getUsers(orgUnit, userId);

    results[orgUnit] = {};
    
    for(var j = 0; j < userIds.length; j++){
        var user = userIds[j];
        results[orgUnit][user] = { "0": utils.getRandomGrade().toString() };
    }
    
    return results;
};

module.exports = {
    'generate': generate
};