import nodeMailer from "nodemailer";

let adminEmail = process.env.MAIL_USER;
let adminPassword = process.env.MAIL_PASSWORD;
let mailHost = process.env.MAIL_HOST;
let mailPort = process.env.MAIL_PORT;
require('dotenv').config();
let sendMail = (to, subject, htmlContent) => {
  let transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false, // use SSL - TLS
    requireTLS: false,
    tls:{
      rejectUnauthorized:false
    },
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  });

  let options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent
  };

  return transporter.sendMail(options); // This default return a promise
};

module.exports = sendMail;
