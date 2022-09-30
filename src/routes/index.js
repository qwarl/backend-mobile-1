const quotationsRoute = require('./quotations');
const phongLogRoute = require('./phongLogs');
const airRoute = require('./Air');
const lclRoute = require('./LCL');

function route(app) {
    app.use('/api/quotations', quotationsRoute);
    app.use('/api/phongLogs', phongLogRoute);
    app.use('/api/air', airRoute);
    app.use('/api/lcl', lclRoute);
}

module.exports = route