'use strict'

const nodemailer = require('nodemailer')
var transporter = null

exports.send = function (req, res) {

    if (!req.body.email || !req.body.name || !req.body.message || !req.body.cart) {
        return res.status(401).send({
            message: "missing_body"
        })
    }

    if (!transporter) {
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        });
    }

    var html = '<b>bonjour Marie-Charlotte</b>' +
        '<br/>' +
        '<br/>' +
        'Une nouvelle commande a été passé sur le site' +
        '<br/>' +
        '<br/>' +
        'nom : ' + req.body.name +
        '<br/>' +
        'e-mail : ' + req.body.email +
        '<br/>' +
        'message : ' + req.body.message +
        '<br/>'

    for (var i = 0; i < req.body.cart.length; i++) {
        html += '<br/>' +
            req.body.cart[i].category + ' - ' + req.body.cart[i].desc + ' : ' + req.body.cart[i].price + ' € ' + req.body.cart[i].tissu1
    }

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Charlie\'s Créa 👻" <contact@charliescrea.fr>', // sender address
        //to: 'fabre.tomas@hotmail.fr, ' + req.body.email, // list of receivers
        to: 'fabre.tomas@hotmail.fr', // list of receivers
        subject: 'Commande sur charliescrea', // Subject line
        //text: 'merci pour votre commande de ' + req.body.commande, // plain text body
        html: html
        // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({
                message: "error"
            });
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        return res.status(200).send({
            message: "mail_sent"
        });

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
}