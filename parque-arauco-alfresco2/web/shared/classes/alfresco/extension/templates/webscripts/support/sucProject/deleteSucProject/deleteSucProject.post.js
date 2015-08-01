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
		var resultSuc = ProjectStagesSrv.getListByFilter(projectStageFilter);
//		logger.log("#### LISTADO ### 	" + filter);
		if(resultSuc.result.size()>0){
			for (var i = 0; i < resultSuc.result.size(); i++) {
//				logger.log(resultSuc.result.get(i).id + "    IIIIIIIDDDDDDD");
				ProjectStagesSrv.remove(ProjectStagesSrv.getById(resultSuc.result.get(i).id).result);
			}
		}

		var sucProject = SucProjectSrv.getById(filter);
//		logger.log("sucProject: "+sucProject)
		var response = SucProjectSrv.remove(sucProject.result);
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