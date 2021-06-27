const server = require("express").Router();
const nodemailer = require("nodemailer");

require("dotenv").config();
//transporte para nodemailer
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, //Nuestro mail
    pass: process.env.PASSWORD, //Nuestra password
  },
});

var returnHTML = function (contactEmail, contactPhone, body) {
  return ` 
        <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              .container {
               width: 90%;
               margin: auto;
               
              }
              h1 {
                text-align: center;
              }
              h2 {
                text-align: center;
              }
              ul {
                text-decoration: none
              }
            </style>
          </head>
        <body>
          <div class='container'>
            <h1>Tienes una nueva solicitud de contacto</h1>
            <h3>email: ${contactEmail}</h3>
            <h3>telefono: ${contactPhone}</h3>
            <h3>${body}</h3>
            <hr>
            
            <div>
            </div>
    
            
      </div> 
      </body> 
      </html>`;
};

server.post("/", (req, res, next) => {
  const contactMail = req.body.contactMail;
  const contactPhone = req.body.contactPhone;
  const body = req.body.body;
  let mailOptions = {
    from: process.env.EMAIL,
    to: "santiagoriverosjasis@gmail.com",
    subject: "Solicitud de Contacto",
    html: returnHTML(contactMail, contactPhone, body),
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error occurs: ", err);
    } else {
      console.log("Success");
      res.send("email sent");
    }
  });
});

module.exports = server;
