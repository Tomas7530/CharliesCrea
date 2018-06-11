'use strict'

const ejs = require('ejs')
const nodemailer = require('nodemailer')
var transporter = null

exports.test = async function (req, res) {

    try {
        const body = {
            name: 'marie',
            message: 'coucou c\'est mon message',
            total: '123',
            cart: [{
                category: 'peluche',
                desc: 'chat',
                price: '10',
                tissus: " tissu 1 : n° 3, tissu 2 : n° 6, tissu 3 : n° 1."
            }, {
                category: 'enfant',
                desc: 'trousse',
                price: '10',
                tissus: " tissu 1 : n° 6, tissu 2 : n° 5, tissu 3 : n° 4."
            }]

        }
        const result = await ejs.renderFile('./ejs/mailClient.ejs', body)
        return res.status(200).send(result)
    }
    catch (error) {
        return res.status(500).send('SEND_ERROR')
    }
}

exports.send = async function (req, res) {

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

    let html = ''

    try {
        html = await ejs.renderFile('./ejs/mailClient.ejs', req.body)
    }
    catch (error) {
        return res.status(500).send('SEND_ERROR')
    }

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Charlie\'s Créa 👻" <contact@charliescrea.fr>', // sender address
        //to: 'fabre.tomas@hotmail.fr, ' + req.body.email, // list of receivers
        to: 'fabre.tomas.ft@gmail.com', // list of receivers
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