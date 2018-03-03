var http = require('http');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

var nodemailer = require('nodemailer');



// exports.sendOneMail = function (toMail, message) {

//   var content = message;
//   var mailOptions = {
//     from: 'logeswari.careator@gmail.com',
//     to: toMail,
//     subject: 'Sending Email using Node.js',
//     html: content
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });


// }
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
    limit: '100mb'
}));

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });


app.use(express.static(__dirname + '/public'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/public/" + "index.html");
    console.log("index.html: " + __dirname + "/public/" + "index.html");
});

var server = app.listen('3000', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("server listening at http");
})

require('./config/apiFile')(app);

// app.post('/emailSend', function (req, res) {
//     console.log("emailSend-->");
//     var responseData;
//     console.log("req.body.toId: " + req.body.toId);
//     console.log("req.body.fromId: " + req.body.fromId);
//     console.log("req.body.subject: " + req.body.subject);
//     console.log("req.body.message: " + req.body.message);

//     var content = req.body.message;
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'logeswari.careator@gmail.com',
//             pass: 'iloveindia'
//         }
//     });

//     var mailOptions = {
//         from: req.body.fromId,
//         to: req.body.toId,
//         subject: req.body.subject,
//         html: content
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//             responseData = {
//                 "status": false,
//                 "errorCode": 400,
//                 "message": "Failed to send mail"
//             }

//         } else {
//             console.log('Email sent: ' + info.response);
//             responseData = {
//                 "status": true,
//                 "errorCode": 200,
//                 "message": "Successfully sent mail"
//             }
//         }
//         res.status(200).send(responseData);
//     });

// })

