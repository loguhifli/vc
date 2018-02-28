app.controller('highFliCtrl', ['$scope', '$uibModal', '$rootScope', 'httpFactory', 'sessionAuthFactory', '$http', function ($scope, $uibModal, $rootScope, httpFactory, sessionAuthFactory, $http) {
    console.log("highFliCtrl-->");
    httpFactory.getFile('property.json');

    var emailModalinstance; /* ### Note: email send model instance for contact section ### */
    var loginModalinstance; /* ### Note:login model instance ### */
    var uplSpeOffModalinstance; /* ### Note: upload special offer model instance ### */
    var uplFestDetailModalinstance; /* ### Note: upload festival detail model instance ### */
    var alertModalinstance; /* ### Note: upload festival detail model instance ### */
    $scope.file = {}; /* ### Note: Upload file declaration ### */
    var specOffSubJson; /* ### Note: specOffSubJson for colecting data of special offer details ### */
    var festDetailSubJson; /* ### Note: festDetailSubJson for colecting data of Festival Details ### */
    var sessionData = null /* ### Note: Identifying session is set or not ### */
    $scope.adminStatus = false;
    if (sessionAuthFactory.getAccess()) {
        var sessionData = sessionAuthFactory.getAccess();

        console.log("sessionData: " + JSON.stringify(sessionData));
        $scope.adminStatus = sessionData.status;
    }





    $scope.getSpecialOfferData = function () {
        console.log("getSpecialOfferData-->");
        // console.log("specOffSubJson: " + JSON.stringify(specOffSubJson));
        var api = "http://159.89.161.196:8085/travel/getSpecialOfferData";

        console.log("api: " + api);

        httpFactory.get(api).then(function (data) {
            var checkStatus = httpFactory.dataValidation(data);
            console.log("data--" + JSON.stringify(data.data));
            if (checkStatus) {

                console.log(" getSpecialOfferData data.data" + JSON.stringify(data.data));
                $scope.specialOfferData = data.data.data;
                console.log("$scope.specialOfferData" + $scope.specialOfferData);
                console.log("  $scope.specialOfferData[0].title" + $scope.specialOfferData[0].title);
                console.log("  $scope.specialOfferData.title" + $scope.specialOfferData.title);
                // $window.location.href = $scope.propertyJson.R082;
            }
            else {
                // alert("error");
                console.log("error in fetching data");
            }

        })

        console.log("<--getSpecialOfferData");
    }

    $scope.getSpecialOfferData();
    $scope.getFestivalDetailData = function () {
        console.log("getSpecialOfferData-->");
        // console.log("specOffSubJson: " + JSON.stringify(specOffSubJson));
        var api = "http://159.89.161.196:8085/travel/getFestivalDetailData";

        console.log("api: " + api);

        httpFactory.get(api).then(function (data) {
            var checkStatus = httpFactory.dataValidation(data);
            console.log("data--" + JSON.stringify(data.data));
            if (checkStatus) {

                console.log(" getFestivalDetailData data.data" + JSON.stringify(data.data));
                $scope.festivalDetailData = data.data.data;
                console.log("$scope.festivalDetailData" + $scope.festivalDetailData);
                console.log("  $scope.festivalDetailData[0].title" + $scope.festivalDetailData[0].title);
                console.log("  $scope.festivalDetailData.title" + $scope.festivalDetailData.title);
                // $window.location.href = $scope.propertyJson.R082;
            }
            else {
                // alert("error");
                console.log("error in fetching data");
            }

        })

        console.log("<--getSpecialOfferData");
    }

    $scope.getFestivalDetailData();


    $scope.logoutHit = function (formName) {
        console.log("Logout-->")
        sessionAuthFactory.clearAccess();
        console.log(" $scope.adminStatus : " + $scope.adminStatus);
        $scope.adminStatus = false;
        $scope.status = true;
        $scope.message = "Logged out successfully"
        alertModalinstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'templates/alert.html',
            windowClass: 'show',
            backdropClass: 'show',
        })
        
        console.log("<--Logout")
    }

    $scope.loginHit = function (formName) {
        console.log("login-->")
        loginModalinstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'templates/loginPopup.html',
            windowClass: 'show',
            backdropClass: 'show'


        })
        console.log("<--login")
    }
    $scope.loginSubmit = function (formName, id, pswd) {

        if (formName.$valid) {
            loginModalinstance.close('resetModel');
            var loginJson = {
                "emailId": id,
                "loginPswd": pswd
            }
            console.log("loginJson: " + JSON.stringify(loginJson));
            var api = "http://159.89.161.196:8085/travel/login";

            console.log("api: " + api);

            httpFactory.post(api, loginJson).then(function (data) {
                var checkStatus = httpFactory.dataValidation(data);
                console.log("login response from backend--" + JSON.stringify(data.data));
                $scope.message = data.data.message;
                $scope.status = data.data.status;
                if (checkStatus) {
                    alertModalinstance = $uibModal.open({
                        scope: $scope,
                        templateUrl: 'templates/alert.html',
                        windowClass: 'show',
                        backdropClass: 'show',
                    })
                    console.log("data" + JSON.stringify(data.data));

                    var sessionJson = {
                        "id": id,
                        "status": data.data.status
                    }
                    sessionAuthFactory.setAccess(sessionJson);
                    sessionData = sessionAuthFactory.getAccess();


                    console.log("sessionData: " + JSON.stringify(sessionData));
                    $scope.adminStatus = sessionData.status;

                    // $window.location.href = $scope.propertyJson.R082;
                }
                else {
                    alertModalinstance = $uibModal.open({
                        scope: $scope,
                        templateUrl: 'templates/alert.html',
                        windowClass: 'show',
                        backdropClass: 'show',
                    })
                }

            })
        }
        else {
            $scope.message = "Please fill the mandatory field";
            $scope.status = false;
            alertModalinstance = $uibModal.open({
                scope: $scope,
                templateUrl: 'templates/alert.html',
                windowClass: 'show',
                backdropClass: 'show',
            })
        }
        console.log("<--login");
    }




    $scope.emailContact = function (id) {
        console.log("emailContact==>");
        console.log("id: " + id);
        $scope.toEmailId = id;
        emailModalinstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'templates/modelPopup.html',
            windowClass: 'show',
            backdropClass: 'show'

        })


        console.log("<==emailContact");
    }



    $scope.sendEmail = function (formName, fromEmailId, emailSub, emailMes) {
        console.log("sendEmail==>");
        console.log("formName: " + formName);

        if (formName.$valid) {
            emailModalinstance.close('resetModel');
            // emailModalinstance.$close();

            emailJson = {
                "toId": $scope.toEmailId,
                "fromId": fromEmailId,
                "subject": emailSub,
                "message": emailMes
            }
            console.log("emailJson: " + JSON.stringify(emailJson));

            // var api = $scope.propertyJson.emailSend;
            var api = "http://159.89.161.196:8085/travel/emailSend";

            console.log("api: " + api);

            httpFactory.post(api, emailJson).then(function (data) {
                var checkStatus = httpFactory.dataValidation(data);
                console.log("data--" + JSON.stringify(data.data));
                $scope.message = data.data.message;
                $scope.status = data.data.status;
                if (checkStatus) {

                    console.log("data" + JSON.stringify(data.data))
                    alertModalinstance = $uibModal.open({
                        scope: $scope,
                        templateUrl: 'templates/alert.html',
                        windowClass: 'show',
                        backdropClass: 'show',
                    })
                    // $window.location.href = $scope.propertyJson.R082;
                }
                else {
                    alertModalinstance = $uibModal.open({
                        scope: $scope,
                        templateUrl: 'templates/alert.html',
                        windowClass: 'show',
                        backdropClass: 'show',
                    })
                }

            })

        }

        console.log("<==sendEmail");
    }


    $scope.uploadSpeOff = function () {
        console.log("login-->")
        uplSpeOffModalinstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'templates/specialOfferUpload.html',
            windowClass: 'show',
            backdropClass: 'show'


        })
        console.log("<--login")

    }

    $scope.uploadFestDetail = function () {
        console.log("uploadFestDetail-->")
        uplFestDetailModalinstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'templates/festivalDetailUpload.html',
            windowClass: 'show',
            backdropClass: 'show'


        })
        console.log("<--uploadFestDetail")

    }
    $scope.festDetailSub = function (formName, title, message, file) {

        console.log("festDetailSub-->");
        if (formName.$valid) {
            console.log("title: " + title);
            console.log("message: " + message);
            console.log("file: " + file);
            console.log("$scope.file: " + $scope.file);
            festDetailSubJson = {
                "title": title,
                "message": message

            }



            if (file != undefined) {

                var uploadURL = "http://159.89.161.196:8085/travel/uploadFestDetailPic";
                console.log("$scope.file from : alumRegCtr.js: " + $scope.file);


                httpFactory.imageUpload(file, uploadURL).then(function (data) {

                    var checkStatus = httpFactory.dataValidation(data);

                    if (checkStatus) {

                        $scope.getUpdateofImage = data;
                        console.log("$scope.getUpdateofImage" + JSON.stringify($scope.getUpdateofImage));
                        // $scope.message = data.data.message;
                        $scope.filePath = data.data.fileFullPath;

                        $scope.status = data.data.status;

                        if ($scope.filePath) {

                            festDetailSubJson.file = $scope.filePath;

                        }
                        $scope.festivalDetailDetails();

                    } else {

                        $scope.status = data.data.status;
                        // $scope.message = data.data.message;
                        console.log("image is filed to uploaded");



                    }
                });



            }
            else {
                $scope.festivalDetailDetails();
                console.log("image is not uploaded");
            }
        }
        console.log("<--festDetailSub");

    }

    $scope.festivalDetailDetails = function () {
        console.log("specialOfferDetails-->");
        uplFestDetailModalinstance.close('resetModel');

        console.log("specOffSubJson: " + JSON.stringify(specOffSubJson));
        var api = "http://159.89.161.196:8085/travel/festivalDetailDataUpload";

        console.log("api: " + api);

        httpFactory.post(api, festDetailSubJson).then(function (data) {
            var checkStatus = httpFactory.dataValidation(data);
            console.log("data--" + JSON.stringify(data.data));
            $scope.message = data.data.message;
            $scope.status = data.data.status;
            if (checkStatus) {

                console.log("data" + JSON.stringify(data.data))
                // $window.location.href = $scope.propertyJson.R082;
                alertModalinstance = $uibModal.open({
                    scope: $scope,
                    templateUrl: 'templates/alert.html',
                    windowClass: 'show',
                    backdropClass: 'show',
                })
                $scope.getFestivalDetailData();
            }
            else {
                alertModalinstance = $uibModal.open({
                    scope: $scope,
                    templateUrl: 'templates/alert.html',
                    windowClass: 'show',
                    backdropClass: 'show',
                })

                // alert("error");
            }

        })

        console.log("<--specialOfferDetails");
    }

    $scope.specOffSub = function (formName, title, message, file) {

        console.log("specOffSub-->");
        if (formName.$valid) {
            console.log("title: " + title);
            console.log("message: " + message);
            console.log("file: " + file);
            console.log("$scope.file: " + $scope.file);
            specOffSubJson = {
                "title": title,
                "message": message

            }



            if (file != undefined) {

                var uploadURL = "http://159.89.161.196:8085/travel/uploadSpeOffPic";
                console.log("$scope.file from : alumRegCtr.js: " + $scope.file);


                httpFactory.imageUpload(file, uploadURL).then(function (data) {

                    var checkStatus = httpFactory.dataValidation(data);

                    $scope.message = data.data.message;
                    $scope.status = data.data.status;
                    if (checkStatus) {

                        $scope.getUpdateofImage = data;
                        console.log("$scope.getUpdateofImage" + JSON.stringify($scope.getUpdateofImage));

                        $scope.filePath = data.data.fileFullPath;

                        $scope.status = data.data.status;

                        if ($scope.filePath) {

                            specOffSubJson.file = $scope.filePath;

                        }
                        $scope.specialOfferDetails();

                    }
                    else {

                        // $scope.status = data.data.status;
                        // $scope.message = data.data.message;
                        alertModalinstance = $uibModal.open({
                            scope: $scope,
                            templateUrl: 'templates/alert.html',
                            windowClass: 'show',
                            backdropClass: 'show',
                        })


                        console.log("image is filed to uploaded");



                    }
                });



            }
            else {
                // $scope.specialOfferDetails();
                // console.log("image is not uploaded");
            }
        }
        console.log("<--specOffSub");

    }

    $scope.specialOfferDetails = function () {
        console.log("specialOfferDetails-->");
        uplSpeOffModalinstance.close('resetModel');

        console.log("specOffSubJson: " + JSON.stringify(specOffSubJson));
        var api = "http://159.89.161.196:8085/travel/specialOfferDataUpload";

        console.log("api: " + api);

        httpFactory.post(api, specOffSubJson).then(function (data) {
            var checkStatus = httpFactory.dataValidation(data);
            console.log("data--" + JSON.stringify(data));
            $scope.message = data.data.message;
            $scope.status = data.data.status;
            if (checkStatus) {

                console.log("data" + JSON.stringify(data.data))


                // $window.location.href = $scope.propertyJson.R082;
                alertModalinstance = $uibModal.open({
                    scope: $scope,
                    templateUrl: 'templates/alert.html',
                    windowClass: 'show',
                    backdropClass: 'show',
                })

                $scope.getSpecialOfferData();
            }
            else {
                alertModalinstance = $uibModal.open({
                    scope: $scope,
                    templateUrl: 'templates/alert.html',
                    windowClass: 'show',
                    backdropClass: 'show'

                })
                // alert("error");
            }

        })

        console.log("<--specialOfferDetails");
    }




    $scope.deleteSO = function (index) {
        console.log("deleteSO-->");
        console.log("index: " + index);
        var index = {
            "index": index
        }
        var api = "http://159.89.161.196:8085/travel/deleteSO";
        httpFactory.post(api, index).then(function (data) {
            var checkStatus = httpFactory.dataValidation(data);
            console.log("data--" + JSON.stringify(data.data));
            $scope.message = data.data.message;
            $scope.status = data.data.status;
            if (checkStatus) {

                console.log("data" + JSON.stringify(data.data))
                // $window.location.href = $scope.propertyJson.R082;
                // $window.location.href = $scope.propertyJson.R082;

                alertModalinstance = $uibModal.open({
                    scope: $scope,
                    templateUrl: 'templates/alert.html',
                    windowClass: 'show',
                    backdropClass: 'show',
                })

                $scope.getSpecialOfferData();
            }
            else {
                alertModalinstance = $uibModal.open({
                    scope: $scope,
                    templateUrl: 'templates/alert.html',
                    windowClass: 'show',
                    backdropClass: 'show',
                })

                console.log("Proccess failed");
            }

        })
        console.log("<--deleteSO");

    }

    $scope.deleteFD = function (index) {
        console.log("deleteSO-->");
        console.log("index: " + index);
        var index = {
            "index": index
        }
        var api = "http://159.89.161.196:8085/travel/deleteFD";
        httpFactory.post(api, index).then(function (data) {
            var checkStatus = httpFactory.dataValidation(data);
            console.log("data--" + JSON.stringify(data.data));
            $scope.message = data.data.message;
            $scope.status = data.data.status;
            if (checkStatus) {

                console.log("data" + JSON.stringify(data.data))
                alertModalinstance = $uibModal.open({
                    scope: $scope,
                    templateUrl: 'templates/alert.html',
                    windowClass: 'show',
                    backdropClass: 'show',
                })
                // $window.location.href = $scope.propertyJson.R082;
                $scope.getFestivalDetailData();
            }
            else {
                alertModalinstance = $uibModal.open({
                    scope: $scope,
                    templateUrl: 'templates/alert.html',
                    windowClass: 'show',
                    backdropClass: 'show',
                })
                console.log("Proccess failed");
            }

        })
        console.log("<--deleteSO");

    }


    console.log("<--highFliCtrl");
}])

