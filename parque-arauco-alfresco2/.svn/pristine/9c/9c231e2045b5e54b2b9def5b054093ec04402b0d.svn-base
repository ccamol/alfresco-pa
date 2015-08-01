<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var filter= bodyContent.filter ? bodyContent.filter : null;
var site= bodyContent.site ? bodyContent.site : null;

if(site =="arauco"){
	response = EngineeringProjectSrv.getById(filter);
	if(response.status > -1){
		model.response = response;
	}else{
		model.response = null;
	}

}else{
	response = ArchitectureProjectSrv.getById(filter);
	if(response.status > -1){
		model.response = response;
	}else{
		model.response = null;
	}
}

//logger.log("response: "+response.result);




