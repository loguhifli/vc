

module.exports.login = function (req, res) {
    console.log("login-->");
    var responseData;

    console.log("emailId: "+req.body.emailId);
    console.log("loginPswd: "+req.body.loginPswd);
    var id = req.body.emailId;
    var pswd = req.body.loginPswd;

    if(id=="admin@highflitravel.com.au" && pswd == "Admin#123")
    {
        responseData = {
            "status": true,
            "errorCode": 200,
            "message": "Credential is Valid"
        }
        res.status(200).send(responseData);
    }
    else{
        responseData = {
            "status": false,
            "errorCode": 400,
            "message": "Credential is Not-Valid"
        }
        res.status(400).send(responseData);
    }
    

    

    console.log("<--login");
}