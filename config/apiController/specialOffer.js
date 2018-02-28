
var fs = require('fs');
var findIndex = require('find-index/findIndex');


module.exports.deleteSO = function (req, res) {

    console.log("deleteSO-->");
    var rawdata = fs.readFileSync('./specialOfferData.json');
    var obj = [];
    var responseData;
    var parsedRawData = JSON.parse(rawdata);
   
    console.log("req.body.index: "+req.body.index);
    var index = req.body.index;

    if (rawdata.length > 0) {
        
        var parsedRawData = JSON.parse(rawdata);

     var isDeleted = parsedRawData.splice(index, 1);
     obj = parsedRawData;
       console.log("**obj: "+JSON.stringify(obj));
       
        fs.writeFile('./specialOfferData.json', JSON.stringify(obj, null, 2));
        
        responseData = {
            "status": true,
            "errorCode": 200,
            "message": "Deleted successfully",
            "data": obj

        }
        res.status(200).send(responseData);
       


       
        
    }

    console.log("<--deleteSO");

}


module.exports.getSpecialOfferData = function (req, res) {
    var rawdata = fs.readFileSync('./specialOfferData.json');
    var obj = [];
    if (rawdata.length > 0) {
        var parsedRawData = JSON.parse(rawdata);
        for (var x = 0; x < parsedRawData.length; x++) {
            obj.push(parsedRawData[x]);
        }
        responseData = {
            "status": true,
            "errorCode": 200,
            "message": "collected data",
            "data": obj

        }
        res.status(200).send(responseData);
    }
    else {
        responseData = {
            "status": false,
            "errorCode": 400,
            "message": "There is no collected data",


        }
        res.status(400).send(responseData);

    }

}

module.exports.specialOfferDataUpload = function (req, res) {
    console.log("specialOfferDataUpload-->");
    var responseData;
    var newparsedRawData;
    if (req.body.title != undefined && req.body.message) {
        var obj = [];

        var detail = {
            "title": req.body.title,
            "message": req.body.message,
        }
        if (req.body.file) {
            detail.file = req.body.file
        }
        obj.push(detail);

        console.log("Start to read file");

        var rawdata = fs.readFileSync('./specialOfferData.json');
        console.log("rawdata: " + rawdata.length);
        if (rawdata.length > 0) {
            console.log("there is some data");
            var parsedRawData = JSON.parse(rawdata);

            for (var x = 0; x < parsedRawData.length; x++) {
                obj.push(parsedRawData[x]);
            }
            console.log("rawdata: " + rawdata);
            // parsedRawData.push(obj);


            // var newData ={};
            // newData.push(JSON.stringify(parsedRawData));



            // newData.push(obj);
           fs.writeFile('./specialOfferData.json', JSON.stringify(obj, null, 2));
          
       
            // console.log("newparsedRawData: " + newparsedRawData);
            // console.log("newparsedRawData.length: " + JSON.stringify(newparsedRawData).length);
            // console.log("newparsedRawData: " + JSON.stringify(newparsedRawData));



        }
        else {
           
            fs.writeFile('./specialOfferData.json', JSON.stringify(obj, null, 2));
        }

        responseData = {
            "status": true,
            "errorCode": 200,
            "message": "Upload Successfully"

        }
        res.status(200).send(responseData);


    }
    else{
        responseData = {
            "status": false,
            "errorCode": 200,
            "message": "There is no data to update"

        }
        
        res.status(200).send(responseData);
    }
    console.log("******responseData: "+JSON.stringify(responseData));
    console.log("<--specialOfferDataUpload");
}