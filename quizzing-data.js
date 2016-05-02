var generate = function generate(orgUnitId){
    var toReturn = {};
    
    toReturn[orgUnitId] = {
        "Quiz": {}
    }
    
    toReturn[orgUnitId]["Quiz"][startDate = new Date().setUTCHours(4,0,0,0)] = 5;
    
    return toReturn;
};

module.exports = {
    'generate': generate
};