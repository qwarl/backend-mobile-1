const quotationsRoute = require('./quotations');

function route(app) {
    app.use('/quotations', quotationsRoute);
}

module.exports = route