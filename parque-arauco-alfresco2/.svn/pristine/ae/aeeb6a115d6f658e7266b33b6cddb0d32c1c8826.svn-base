<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');
var filter= bodyContent.filter ? bodyContent.filter : null;
var EQUALS_TO = 0;
if(filter != null){
	var bodyContent = eval('(' + requestbody.content + ')');
	var filter= bodyContent.filter ? bodyContent.filter : null;
//	logger.log("ENTRANDO A MI WEBSCRIPT");

	var query =  'TYPE:"pa:paDocument"' + " AND @pa\\:projectID:" + filter;
//	logger.log(query);
	var resultSet = search.luceneSearch(query);

	if(resultSet.length > 0){
		model.resultSet = 1;
	}else{
//		logger.log("####  ENTRANDO A IF #####");
		var projectStageFilter = new ProjectStageFilter();
		projectStageFilter.idProject.exact(filter, EQUALS_TO);
		var resultEngineering = ProjectStagesSrv.getListByFilter(projectStageFilter);
//		logger.log("#### LISTADO ### 	" + filter);
		if(resultEngineering.result.size()>0){
			for (var i = 0; i < resultEngineering.result.size(); i++) {
//				logger.log(resultEngineering.result.get(i).id + "    IIIIIIIDDDDDDD");
				ProjectStagesSrv.remove(ProjectStagesSrv.getById(resultEngineering.result.get(i).id).result);
			}
		}

		var resultEngineering = EngineeringProjectSrv.getById(filter);
		var response = EngineeringProjectSrv.remove(resultEngineering.result);
		if(response.status > -1){
			model.response = response;	
		}else{
			model.response = null;
		}
		model.resultSet = 0;
	}
}else{
//	logger.log("El valor de Proyecto Suc no puede ser nulo");
}