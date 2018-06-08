'use strict';

const controllers = require('./controllers')

module.exports = function (app) {

    // Index
    //app.route('/')
    //.get(controllers.index.send);

    // Mail
    app.route('/api/send_mail')
        .post(controllers.mail.send);

}