app.factory('sessionAuthFactory', function($cookieStore) {
    var authFact={};
	authFact.setAccess=function(accessInfo){
		$cookieStore.put('accessInfo',accessInfo);
		//authFact.accessInfo=acessInfo;
	}
	authFact.getAccess=function(acessInfo){
		authFact.accessInfo=$cookieStore.get('accessInfo');
		return authFact.accessInfo;
	}

	authFact.clearAccess=function(){
		$cookieStore.remove('accessInfo');
	}
	return authFact;
})