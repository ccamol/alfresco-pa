<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idProject= bodyContent.idProject ? bodyContent.idProject : null;
var idTypeProject= bodyContent.idTypeProject ? bodyContent.idTypeProject : null;
var stageStatus=1;
var StageTypeObject=null;
var resultProjectFilter=null;
var projectStageFilter = new ProjectStageFilter();
var EQUALS_TO = 0;
var idStage=null;

projectStageFilter.idProject.exact(idProject, EQUALS_TO);
projectStageFilter.idProjectType.exact(idTypeProject, EQUALS_TO);

resultProjectFilter = ProjectStagesSrv.getListByFilter(projectStageFilter);

	if(idTypeProject != null){
		var	projectTypeFilter = new ProjectTypeFilter();
		projectTypeFilter.id.exact(idTypeProject, EQUALS_TO);

		var projectTypeElements = ProjectTypeSrv.getListByFilter(projectTypeFilter,"id", true);
		//este funciona	con el de abajo
		//	var projectTypeElements = ProjectTypeSrv.getById(idTypeProject);
		//	var projectTypeArray = projectTypeElements.result.stageTypes.toArray();
		var projectTypeArray = projectTypeElements.result.get(0).stageTypes.toArray();
		var aux=null;
		var ids=[];
		var projectStage = new ProjectStages();
		projectStage.idProject = idProject;
		projectStage.idProjectType= idTypeProject;
		
		for (var y = 0; y < projectTypeArray.length; y++) {
//			StageTypeObject = StageTypeSrv.getById(projectTypeArray[y].id);
			ids.push(projectTypeArray[y].id);

//			projectStage.stageType = StageTypeObject.result;
//			ProjectStagesSrv.add(projectStage);
		}
		for (var i = 0; i < ids.length; i++) {
			for (var j = i + 1; j < ids.length; j++) {
				if (ids[i] > ids[j]) {
					aux = ids[i];
					ids[i] = ids[j];
					ids[j] = aux;
				}
			}
		}

		for (var a = 0; a < ids.length; a++) {
			
//			if(a==0){
//				projectStage.stageStatus = 1;
//				idStage = ids[a];
//			}
			
			if(resultProjectFilter.result.size()<1){
			
			StageTypeObject = StageTypeSrv.getById(ids[a]);
			
			if (a>=0) {
				projectStage.stageStatus = 1;
			}
			
			
			projectStage.stageType = StageTypeObject.result;
			
			ProjectStagesSrv.add(projectStage);
			
			}
			
		}
		
	}
	
	projectStageFilter = new ProjectStageFilter();
	projectStageFilter.idProject.exact(idProject, EQUALS_TO);
	projectStageFilter.idProjectType.exact(idTypeProject, EQUALS_TO);
	//projectStageFilter.stageType.exact(idStage, EQUALS_TO);
	projectStageFilter.stageStatus.exact(1, EQUALS_TO);
	resultProjectFilter = ProjectStagesSrv.getListByFilter(projectStageFilter);
	
	
if(resultProjectFilter.result.size()>0){
	
}else{
	projectStageFilter = new ProjectStageFilter();
	projectStageFilter.idProject.exact(idProject, EQUALS_TO);
	projectStageFilter.idProjectType.exact(idTypeProject, EQUALS_TO);
	//projectStageFilter.stageType.exact(idStage, EQUALS_TO);
	projectStageFilter.stageStatus.exact(0, EQUALS_TO);
	resultProjectFilter = ProjectStagesSrv.getListByFilter(projectStageFilter);
}

if(resultProjectFilter.result.size()>0){
}else{
	projectStageFilter = new ProjectStageFilter();
	projectStageFilter.idProject.exact(idProject, EQUALS_TO);
	projectStageFilter.idProjectType.exact(idTypeProject, EQUALS_TO);
	//projectStageFilter.stageType.exact(idStage, EQUALS_TO);
	projectStageFilter.stageStatus.exact(2, EQUALS_TO);
	resultProjectFilter = ProjectStagesSrv.getListByFilter(projectStageFilter);
}

var stageActive = null;
if(resultProjectFilter.result.size()>0){
	stageActive = resultProjectFilter.result.get(0).id;
}

if(stageActive != null){
	model.result = stageActive;
}else{
	model.result = null;
}


