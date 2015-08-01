<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var id = bodyContent.id? bodyContent.id : null;
var type = bodyContent.type? bodyContent.type : null;
var typeProject = bodyContent.typeProject? bodyContent.typeProject : null;
var projectList = new Array();
var EQUALS_TO = 0;   
var projectResponse=null;
var sucObjects = [];
var sucIDS = [];

if(type!=null && type==2){
	var engineeringProjectFiler = EngineeringProjectFiler();  
	engineeringProjectFiler.mall.exact(id, EQUALS_TO); 
	projectResponse =EngineeringProjectSrv.getListByFilter(engineeringProjectFiler);  


	if(projectResponse.status>-1){           
		projectList = projectResponse.result;
	}
}else if(type!=null && type==1){
	if(typeProject == '1'){
		var architectureProjectFiler = ArchitectureProjectFilter();  
		architectureProjectFiler.mall.exact(id, EQUALS_TO); 
		projectResponse =ArchitectureProjectSrv.getListByFilter(architectureProjectFiler);  
	}

	if(typeProject == '2'){
		var sucFilter = new SucFilter();
		sucFilter.mall.exact(id, EQUALS_TO);
		var resultSuc = SucSrv.getListByFilter(sucFilter).result;
		if(resultSuc.size() > 0){
			for(var y=0; y<resultSuc.size(); y++){
				sucIDS.push(resultSuc.get(y).id);
			}

			if(sucIDS.length > 0){
				for(var x=0; x<sucIDS.length; x++){
					var sucProjectFilter = new SucProjectFilter();
					sucProjectFilter.sucEntity.exact(sucIDS[x], EQUALS_TO);
					var sucElement = SucProjectSrv.getListByFilter(sucProjectFilter);
					if(sucElement.result.size() > 0){
						for (var zz = 0; zz < sucElement.result.size(); zz++) {
							sucObjects.push(SucProjectSrv.getById(sucElement.result.get(zz).id).result);
						}

					}
				}
			}
		}
	}
}

if(projectResponse != null){
	if(projectResponse.status>-1){           
		projectList = projectResponse.result;
		model.resultSet = projectList;   
	}	
}

if(sucObjects.length > 0){
	model.resultSet = sucObjects; 
}






