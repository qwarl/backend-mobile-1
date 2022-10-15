const quotationsRoute = require('./Fcl/quotations');
const phongLogRoute = require('./LogDeparment/phongLogs');
const airRoute = require('./Air/Air');
const lclRoute = require('./Air/LCL');
const domTruck = require('./DOM/DomTruck');
const domSeaCy = require('./DOM/Sea/DomSeaCy');
const domSeaDoor = require('./DOM/Sea/DomDoor');
const dataImport = require('./ImportDeparment/Import');
const importLCL = require('./ImportDeparment/ImportLCL');
const importLCLCheckPrice = require('./ImportDeparment/ImportLCLCheckPrice');

function route(app) {
    app.use('/api/quotations', quotationsRoute);
    app.use('/api/phongLogs', phongLogRoute);
    app.use('/api/air', airRoute);
    app.use('/api/lcl', lclRoute);
    app.use('/api/truck', domTruck);
    app.use('/api/sea-cy', domSeaCy);
    app.use('/api/sea-door', domSeaDoor);
    app.use('/api/import', dataImport);
    app.use('/api/import-lcl', importLCL);
    app.use('/api/import-lcl-check', importLCLCheckPrice);

}

module.exports = route