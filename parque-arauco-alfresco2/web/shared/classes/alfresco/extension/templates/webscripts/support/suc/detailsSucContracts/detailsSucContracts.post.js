<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var filter= bodyContent.filter ? bodyContent.filter : null;

//logger.log("filter: "+filter);

var contractFilter = new ContractFilter();

if(filter !== null){
	var EQUALS_TO = 0;
	contractFilter.sucEntity.exact(filter, EQUALS_TO);
	
	response = ContractSrv.getListByFilter(contractFilter);
//	logger.log("response: "+response.result);
	if(response.status > -1){
		model.response = response;
	}else{
		model.response = null;
	}
}else{
	model.response = null;
}
var currentDate = new Date();
currentDate = currentDate.getDate() + "-" + (currentDate.getMonth() +1) + "-" + currentDate.getFullYear();

model.currentDate = currentDate;