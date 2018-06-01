'use strict';

const controllers = require('./controllers')

module.exports = function (app) {

    // Mail
    app.route('/api/send_mail')
        .post(controllers.mail.send);

}