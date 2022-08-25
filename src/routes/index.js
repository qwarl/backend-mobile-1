const quotationsRoute = require('./quotations');
const phongLogRoute = require('./phongLogs');

function route(app) {
    app.use('/api/quotations', quotationsRoute);
    app.use('/api/phongLogs', phongLogRoute);
}

module.exports = route