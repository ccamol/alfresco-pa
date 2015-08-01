<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var filter= bodyContent.filter ? bodyContent.filter : null;
//logger.log("filter: "+filter);
if(filter !== null){
	response = SucSrv.getById(filter);
	if(response.status > -1){
		model.response = response;
	}else{
		model.response = null;
	}
}else{
	model.response = null;
}







