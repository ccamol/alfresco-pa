<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var id = bodyContent.id? bodyContent.id : null;
var type = bodyContent.type? bodyContent.type : null;
var typeProject = bodyContent.typeProject ? bodyContent.typeProject : null;
var projectList = new Array();
var EQUALS_TO = 0;   
var projectResponse=null;
var stageResponse=null;
var sucObjects = [];
var sucIDS = [];

if(type!=null && type==2){
	projectResponse =EngineeringProjectSrv.getById(id);  
	if(projectResponse.status>-1){      
		var projectStageFilter = ProjectStageFilter();  
		projectStageFilter.idProject.exact(projectResponse.result.id, EQUALS_TO); 
		projectStageFilter.idProjectType.exact(projectResponse.result.projectType.id, EQUALS_TO);

		stageResponse = ProjectStagesSrv.getListByFilter(projectStageFilter);
		if(stageResponse.status>-1){
			projectList=stageResponse.result;
		}
	}
}else if(type!=null && type==1){
	if(typeProject == '1'){
		projectResponse =ArchitectureProjectSrv.getById(id);  
		if(projectResponse.status>-1){      
			var projectStageFilter = ProjectStageFilter();  
			projectStageFilter.idProject.exact(projectResponse.result.id, EQUALS_TO); 
			projectStageFilter.idProjectType.exact(projectResponse.result.projectType.id, EQUALS_TO);

			stageResponse = ProjectStagesSrv.getListByFilter(projectStageFilter);
			if(stageResponse.status>-1){
				projectList=stageResponse.result;
			}
		}
	}

	if(typeProject == '2'){
			var sucProject = SucProjectSrv.getById(id);
			var projectStageFilter = ProjectStageFilter(); 
//			logger.log(sucProject.result.id + " #########");
//			logger.log(sucProject.result.projectType.id + " #########");
			projectStageFilter.idProject.exact(sucProject.result.id, EQUALS_TO); 
			projectStageFilter.idProjectType.exact(sucProject.result.projectType.id, EQUALS_TO);
			var stageResponse = ProjectStagesSrv.getListByFilter(projectStageFilter);
			if(stageResponse.status>-1){
				projectList=stageResponse.result;
			}
	}
}

if(stageResponse != null){
	if(stageResponse.status>-1){           
		model.resultSet = projectList;   
	}	
}

