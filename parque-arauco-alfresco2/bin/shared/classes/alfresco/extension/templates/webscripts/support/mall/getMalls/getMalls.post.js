<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var countryId= bodyContent.countryId ? bodyContent.countryId : null;
//logger.log("countryID: "+countryId);
var mallFilter = MallFilter();
var EQUALS_TO = 0;

if(countryId !== null){
	mallFilter.country.exact(countryId, EQUALS_TO);
	
	var response = MallSrv.getListByFilter(mallFilter);
	if(response.status > -1){
		model.resultSet = response;
	}else{
		model.resultSet = null;
	}

}else{
	var response = MallSrv.getAll();
	if(response.status > -1){
		model.resultSet = response;
	}else{
		model.resultSet = null;
	}

}





