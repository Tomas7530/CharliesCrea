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

    var html = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">' +
        '<html xmlns:v="urn:schemas-microsoft-com:vml">' +

        '<head>' +
        '<meta http-equiv="content-Type" content="text/html; charset=utf-8">' +
        '<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">' +
        '</head>' +

        '<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">' +

        '<!-- Header -->' +

        '<table bgcolor="#1B1F22" width="100%" cellpadding="0" cellspacing="0" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td bgcolor="#1B1F22" valign="top">' +
        '<!--[if gte mso 9]>' +
        '<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;">' +
        '<v:fill type="tile" color="#1B1F22" />' +
        '<v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">' +
        '<![endif]-->' +
        '<div>' +
        '<table width="590" align="center" cellpadding="0" cellspacing="0" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td height="30" style="font-size: 30px; line-height: 30px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td align="center" style="text-align: center;">' +
        '<a href="https://charlies-crea.herokuapp.com/">' +
        '<img src="https://i.goopics.net/NXb8P.png" width="150" alt="logocharliescrea">' +
        '</a>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="30" style="font-size: 30px; line-height: 30px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td align="center" style="font-family: helvetica, sans-serif; text-align: center; font-size: 40px; color: #FFF; mso-line-height-rule: exactly; line-height: 40px;">' +
        'Votre commande a bien été prise en compte !' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="30" style="font-size: 30px; line-height: 30px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td align="center" style="font-family: helvetica, sans-serif; text-align: center; color: #bdbdbd; mso-line-height-rule: exactly; line-height: 25px;">' +
        'Vous recevrez prochainement un mail de confirmation concernant la disponibilité des tissus et la date que vous avez choisie.' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="30" style="font-size: 30px; line-height: 30px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +

        '<!-- /Header -->' +

        '<!-- recap commande -->' +

        '<table bgcolor="#303030" width="100%" cellpadding="0" cellspacing="0" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td height="30" style="font-size: 30px; line-height: 30px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<table width="590" align="center" cellpadding="0" cellspacing="0" border="0">' +
        '<tr>' +
        '<td align="center" style="font-family: helvetica, sans-serif; font-size: 35px; text-align: center; color: #DCDCDC; mso-line-height-rule: exactly; line-height: 25px;">' +
        'Votre commande :' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="20" style="font-size: 20px; line-height: 20px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td align="center">' +
        '<table width="75" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFF">' +
        '<tbody>' +
        '<tr>' +
        '<td height="3" style="font-size: 3px; line-height: 3px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="30" style="font-size: 30px; line-height: 30px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>'

    for (var i = 0; i < req.body.cart.length; i++) {
        html += '<tr>' +
            '<td>' +
            '<table width="590" align="center" cellpadding="0" cellspacing="0">' +
            '<tbody>' +
            '<tr>' +
            '<td align="center">' +
            '<img src="https://i.goopics.net/JYbb0.jpg" alt="userlogo" width="75">' +
            '</td>' +
            '<td width="40" style="font-size: 40px; line-height: 40px;">' +
            '&nbsp;' +
            '</td>' +
            '<td height="30" style="font-family: helvetica, sans-serif; font-size: 22px; text-align: center; color: #bdbdbd; mso-line-height-rule: exactly; line-height: 20px;">' +
            req.body.cart[i].category + ' - ' + req.body.cart[i].desc + ' : ' +
            '</td>' +
            '<td width="40" style="font-size: 40px; line-height: 40px;">' +
            '&nbsp;' +
            '</td>' +
            '<td align="center" style="font-family: helvetica, sans-serif; font-size: 13px; text-align: center; color: #bdbdbd; mso-line-height-rule: exactly; line-height: 22px;">' +
            'Tissu principal n° : ' +
            req.body.cart[i].tissu1 +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td height="20" style="font-size: 20px; line-height: 20px;">' +
            '&nbsp;' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>'
    }

    html += '</table>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +

        '<!-- Bloc 3 -->' +

        '<table bgcolor="#303030" width="100%" cellpadding="0" cellspacing="0" border="0">' +
        '<tbody>' +
        '<tr>' +
        '<td height="30" style="font-size: 30px; line-height: 30px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<table width="590" align="center" cellpadding="0" cellspacing="0" border="0">' +
        '<tr>' +
        '<td align="center" style="font-family: helvetica, sans-serif; font-size: 35px; text-align: center; color: #DCDCDC; mso-line-height-rule: exactly; line-height: 25px;">' +
        'Mon titre' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="20" style="font-size: 20px; line-height: 20px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td align="center">' +
        '<table width="75" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFF">' +
        '<tbody>' +
        '<tr>' +
        '<td height="3" style="font-size: 3px; line-height: 3px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="30" style="font-size: 30px; line-height: 30px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<table width="170" align="left" cellpadding="0" cellspacing="0">' +
        '<tbody>' +
        '<tr>' +
        '<td align="center">' +
        '<img src="http://lorempicsum.com/demo/user.png" alt="userlogo" width="40">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="10" style="font-size: 10px; line-height: 10px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="30" style="font-family: helvetica, sans-serif; font-size: 22px; text-align: center; color: #bdbdbd; mso-line-height-rule: exactly; line-height: 20px;">' +
        'Marie' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="10" style="font-size: 10px; line-height: 10px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td align="center" style="font-family: helvetica, sans-serif; font-size: 13px; text-align: center; color: #bdbdbd; mso-line-height-rule: exactly; line-height: 22px;">' +
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus earum equibusdam !' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<table width="40" align="left" cellpadding="0" cellspacing="0">' +
        '<tbody>' +
        '<tr>' +
        '<td height="30" style="font-size: 30px; line-height: 30px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<table width="170" align="left" cellpadding="0" cellspacing="0">' +
        '<tbody>' +
        '<tr>' +
        '<td align="center">' +
        '<img src="http://lorempicsum.com/demo/user.png" alt="userlogo" width="40">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="10" style="font-size: 10px; line-height: 10px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="30" style="font-family: helvetica, sans-serif; font-size: 22px; text-align: center; color: #bdbdbd; mso-line-height-rule: exactly; line-height: 20px;">' +
        'Charlotte' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="10" style="font-size: 10px; line-height: 10px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td align="center" style="font-family: helvetica, sans-serif; font-size: 13px; text-align: center; color: #bdbdbd; mso-line-height-rule: exactly; line-height: 22px;">' +
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus earum equibusdam !' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<table width="40" align="left" cellpadding="0" cellspacing="0">' +
        '<tbody>' +
        '<tr>' +
        '<td height="30" style="font-size: 30px; line-height: 30px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<table width="170" align="left" cellpadding="0" cellspacing="0">' +
        '<tbody>' +
        '<tr>' +
        '<td align="center">' +
        '<img src="http://lorempicsum.com/demo/user.png" alt="userlogo" width="40">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="10" style="font-size: 10px; line-height: 10px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="30" style="font-family: helvetica, sans-serif; font-size: 22px; text-align: center; color: #bdbdbd; mso-line-height-rule: exactly; line-height: 20px;">' +
        'Gayrard' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="10" style="font-size: 10px; line-height: 10px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td align="center" style="font-family: helvetica, sans-serif; font-size: 13px; text-align: center; color: #bdbdbd; mso-line-height-rule: exactly; line-height: 22px;">' +
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus earum equibusdam !' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td height="30" style="font-size: 30px; line-height: 30px;">' +
        '&nbsp;' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +

        '<!-- /Bloc 3 -->' +

        //html += '<b>bonjour Marie-Charlotte</b>' +
        //'<br/>' +
        //'<br/>' +
        //'Une nouvelle commande a été passé sur le site' +
        //'<br/>' +
        //'<br/>' +
        //'nom : ' + req.body.name +
        //'<br/>' +
        //'e-mail : ' + req.body.email +
        //'<br/>' +
        //'message : ' + req.body.message +
        //'<br/>' +

        //for (var i = 0; i < req.body.cart.length; i++) {
        //    html += '<br/>' +
        //        req.body.cart[i].category + ' - ' + req.body.cart[i].desc + ' : ' + req.body.cart[i].price + ' € ' +
        //        '<br/>' +
        //        'Tissu1 n° ' +
        //        req.body.cart[i].tissu1
        //}

        '</div>' +
        '<!--[if gte mso 9]>' +
        '</v:textbox>' +
        '</v:rect>' +
        '<![endif]-->' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</body>' +

        '</html>'

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