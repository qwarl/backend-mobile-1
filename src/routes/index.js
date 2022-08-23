const quotationsRoute = require('./quotations');

function route(app) {
    app.use('/api/quotations', quotationsRoute);
}

module.exports = route