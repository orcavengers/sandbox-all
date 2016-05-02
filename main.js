var generateCourseAccessLastDayData = require('CourseAccess/course-access-data.js').generateLast,
    generateCourseAccessData = require('CourseAccess/course-access-data.js').generate,
    generateGradesData = require('Grades/grades-data.js').generate,
    generatePredictedGradesData = require('Grades/predicted-grades-data.js').generate,
    generateDiscussionsData = require('Discussions/discussions-data.js').generate,
    generateQuizData = require('quizzing-data.js').generate,
    utils = require('Common/utils.js');

// Last Day of Course Access of specified user for Course
Sandbox.define('/v1/aggregates/10000/data/{orgUnitId}/{userId}','GET', function(req, res) {
    var result = generateCourseAccessLastDayData(req.params.orgUnitId, req.params.userId);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

// Last Day of Course Access of all users for Course - NEW ROUTE
Sandbox.define('/v1/aggregates/10000/data/{orgUnitId}','GET', function(req, res) {
    var result = generateCourseAccessLastDayData(req.params.orgUnitId);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

// Current Grade of all users for Course - NEW ROUTE
Sandbox.define('/v1/aggregates/20000/data/{orgUnitId}','GET', function(req, res) {
    var result = generateGradesData(req.params.orgUnitId);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

// Predicted Grade of all users for Course - NEW ROUTE
Sandbox.define('/v1/aggregates/30000/data/{orgUnitId}','GET', function(req, res) {
    var result = generatePredictedGradesData(req.params.orgUnitId);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

// Threads started
Sandbox.define('/v1/aggregates/40000/data/{orgUnitId}','GET', function(req, res) {
    var dates = utils.parseDates(req.query.startTime, req.query.endTime);
    
    var result = generateDiscussionsData(req.params.orgUnitId, dates.startTime, dates.endTime);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

// Posts replied to
Sandbox.define('/v1/aggregates/50000/data/{orgUnitId}','GET', function(req, res) {
    var dates = utils.parseDates(req.query.startTime, req.query.endTime);
    
    var result = generateDiscussionsData(req.params.orgUnitId, dates.startTime, dates.endTime);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//Course Access aggregation
Sandbox.define('/v1/aggregates/200/data/{orgId}/Course Offering','GET', function(req, res) {
    var dates = utils.parseDates(req.query.startTime, req.query.endTime);
    
    var result = generateCourseAccessData(req.params.orgId, undefined, dates.startTime, dates.endTime);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

//Quizzing aggregation
Sandbox.define('/v1/aggregates/{aggregationId}/data/{orgUnitId}/Quiz','GET', function(req, res) {
    var result = generateQuizData(req.params.orgUnitId);
    
    res.type('application/json');
    res.status(200);
    res.json(result);
});