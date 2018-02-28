var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'logeswari.careator@gmail.com',
    pass: 'iloveindia'
  }
});

exports.sendOneMail = function (toMail, message) {
  // var fromEmail = '"No Reply " <logutamil11@gmail.com>';
  // var toEmail = toMail;
  // var subject = subject;
  // var content = message;
  
}

module.exports.emailSend = function (req, res) {
console.log("emailSend-->");
var responseData;
console.log("req.body.toId: " + req.body.toId);
console.log("req.body.fromId: " + req.body.fromId);
console.log("req.body.subject: " + req.body.subject);
console.log("req.body.message: " + req.body.message);

var content = req.body.message;
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'logeswari.careator@gmail.com',
        pass: 'iloveindia'
    }
});

var mailOptions = {
    from: req.body.fromId,
    to: req.body.toId,
    subject: req.body.subject,
    html: content
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        responseData = {
            "status": false,
            "errorCode": 400,
            "message": "Failed to send mail"
        }

    } else {
        console.log('Email sent: ' + info.response);
        responseData = {
            "status": true,
            "errorCode": 200,
            "message": "Successfully sent mail"
        }
    }
    res.status(200).send(responseData);
});

    console.log("<--emailSend");
  

}