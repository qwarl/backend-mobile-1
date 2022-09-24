const quotationsRoute = require('./quotations');
const phongLogRoute = require('./phongLogs');
const airRoute = require('./Air');

function route(app) {
    app.use('/api/quotations', quotationsRoute);
    app.use('/api/phongLogs', phongLogRoute);
    app.use('/api/air', airRoute);
}

module.exports = route