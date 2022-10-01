const quotationsRoute = require('./quotations');
const phongLogRoute = require('./phongLogs');
const airRoute = require('./Air');
const lclRoute = require('./LCL');
const domTruck = require('./DOM/DomTruck');
const domSeaCy = require('./DOM/DomSeaCy');

function route(app) {
    app.use('/api/quotations', quotationsRoute);
    app.use('/api/phongLogs', phongLogRoute);
    app.use('/api/air', airRoute);
    app.use('/api/lcl', lclRoute);
    app.use('/api/truck', domTruck);
    app.use('/api/sea-cy', domSeaCy);
}

module.exports = route