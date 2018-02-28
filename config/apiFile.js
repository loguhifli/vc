var email = require('./apiController/email.js');
var login = require('./apiController/login.js');
var image = require('./apiController/image.js');
var sp = require('./apiController/specialOffer.js');
var fd = require('./apiController/festivalDetail.js');

module.exports = function (app) {
    app.post('/travel/emailSend', email.emailSend);
    app.post('/travel/login', login.login);
    app.post('/travel/uploadSpeOffPic', image.uploadSpeOffPic);
    app.post('/travel/specialOfferDataUpload', sp.specialOfferDataUpload);
    app.get('/travel/getSpecialOfferData', sp.getSpecialOfferData);
    app.post('/travel/deleteSO', sp.deleteSO);

    app.post('/travel/uploadFestDetailPic',  image.uploadFestDetailPic);
    app.post('/travel/festivalDetailDataUpload', fd.festivalDetailDataUpload);
    app.get('/travel/getFestivalDetailData', fd.getFestivalDetailData);
    app.post('/travel/deleteFD', fd.deleteFD);
}