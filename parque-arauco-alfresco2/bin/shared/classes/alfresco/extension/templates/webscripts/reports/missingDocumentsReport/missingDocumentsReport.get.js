<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">

var area= args.area ? args.area : null;
var stage= args.stage ? args.stage : null;
var mall= args.mall ? args.mall : null;
var project= args.project ? args.project : null;
var responsible= args.responsible ? args.responsible : null;
var typeProject= args.typeProject ? args.typeProject : null;

var projectResponse = null;
var stageResponse = null;
var projectList = null;
var stageList = null;
var checkListResultSet = CheckListResultSet();
var resultSet = new Array();
var counter=0;

//Proccess Arquitecture projects
if(area==null || area=='null' || area=="1" && typeProject=="1"){
//	logger.log("PROYECTO ARQUITECTURA");
	if(mall!=null && mall!='null'){
		var architectureProjectFiler = ArchitectureProjectFilter();  
		architectureProjectFiler.mall.exact(mall, EQUALS_TO); 
		if(project!=null && project!='null'){
			architectureProjectFiler.id.exact(project, EQUALS_TO); 
		}
		projectResponse =ArchitectureProjectSrv.getListByFilter(architectureProjectFiler);  
		
		if(projectResponse.status>-1){           
			projectList = projectResponse.result;
		}
	}else{
		projectResponse =ArchitectureProjectSrv.getAll();  
		
		if(projectResponse.status>-1){           
			projectList = projectResponse.result;
		}
	}
	
	if(projectList.size()>0){
		
		for(i=0;i<projectList.size();i++){
			var projectStageFilter = ProjectStageFilter();  
			projectStageFilter.idProject.exact(projectList.get(i).id, EQUALS_TO);
			if(stage!=null && stage!='null'){
				projectStageFilter.stageType.exact(stage, EQUALS_TO);
			}
			stageResponse=ProjectStagesSrv.getListByFilter(projectStageFilter);
			if(stageResponse.status>-1){ 
				stageList = stageResponse.result;
				for(j=0;j<stageList.size();j++){
					checkListResultSet = CheckListService.checkDocuments(6, stageList.get(j).id);
					if(checkListResultSet.status>-1){
						for(k=0;k<checkListResultSet.result.size();k++){
							if(checkListResultSet.result.get(k).check==false){
								if(stageList.get(j).stageStatus==0 || stageList.get(j).stageStatus==1){
									resultSet[counter]=new Array();
									resultSet[counter]['mall']=projectList.get(i).mall.name;
									resultSet[counter]['category']="Proyecto mall";
									resultSet[counter]['document']=checkListResultSet.result.get(k).documentTypeName;
									resultSet[counter]['project']=projectList.get(i).name;
									resultSet[counter]['area']="Arquitectura";
									resultSet[counter]['stage']=stageList.get(j).stageType.name;
									if(stageList.get(j).stageStatus==0){
										resultSet[counter]['stageStatus']="Cerrada"
									}
									if(stageList.get(j).stageStatus==1){
										resultSet[counter]['stageStatus']="Abierta"
									}
									if(stageList.get(j).stageStatus==2){
										resultSet[counter]['stageStatus']="En espera";
									}
									counter++;
								}
							}
						}
					}
				}			
				
			}
		}
	}
}


//Proccess Engineering projects
if(area==null || area=='null' || area=="2"){
//	logger.log("PROYECTO INGENIERIA");
	if(mall!=null && mall!='null'){
		var engineeringProjectFiler = EngineeringProjectFiler();  
		engineeringProjectFiler.mall.exact(mall, EQUALS_TO); 
		if(project!=null && project!='null'){
			engineeringProjectFiler.id.exact(project, EQUALS_TO); 
		}
		projectResponse =EngineeringProjectSrv.getListByFilter(engineeringProjectFiler);  
		
		if(projectResponse.status>-1){           
			projectList = projectResponse.result;
		}
	}else{
		projectResponse =EngineeringProjectSrv.getAll();  
		
		if(projectResponse.status>-1){           
			projectList = projectResponse.result;
		}
	}
	
	if(projectList.size()>0){
		for(i=0;i<projectList.size();i++){
			var projectStageFilter = ProjectStageFilter();  
			projectStageFilter.idProject.exact(projectList.get(i).id, EQUALS_TO);
			if(stage!=null && stage!='null'){
				projectStageFilter.stageType.exact(stage, EQUALS_TO);
			}
			stageResponse=ProjectStagesSrv.getListByFilter(projectStageFilter);
			if(stageResponse.status>-1){ 
				stageList = stageResponse.result;
				for(j=0;j<stageList.size();j++){
					checkListResultSet = CheckListService.checkDocuments(5, stageList.get(j).id);
					if(checkListResultSet.status>-1){
						for(k=0;k<checkListResultSet.result.size();k++){
							if(checkListResultSet.result.get(k).check==false){
								if(stageList.get(j).stageStatus==0 || stageList.get(j).stageStatus==1){
									resultSet[counter]=new Array();
									resultSet[counter]['mall']=projectList.get(i).mall.name;
									resultSet[counter]['category']="Proyecto mall";
									resultSet[counter]['document']=checkListResultSet.result.get(k).documentTypeName;
									resultSet[counter]['project']=projectList.get(i).name;
									resultSet[counter]['area']="Ingeniería";
									resultSet[counter]['stage']=stageList.get(j).stageType.name;
									if(stageList.get(j).stageStatus==0){
										resultSet[counter]['stageStatus']="Cerrada"
									}
									if(stageList.get(j).stageStatus==1){
										resultSet[counter]['stageStatus']="Abierta"
									}
									if(stageList.get(j).stageStatus==2){
										resultSet[counter]['stageStatus']="En espera";
									}
									counter++;
								}
							}
						}
					}
				}			
				
			}
		}
	}
}

//Proccess SUC projects
if(area==null || area=='null' || area=="1" && typeProject =="2"){
//	logger.log("PROYECTO DE SUC");
	if(mall!=null && mall!='null'){
		var sucProjectFilter = SucProjectFilter();  
		if(project!=null && project!='null'){
			sucProjectFilter.id.exact(project, EQUALS_TO); 
		}
		projectResponse =SucProjectSrv.getListByFilter(sucProjectFilter);  
		
		if(projectResponse.status>-1){           
			projectList = projectResponse.result;
		}
	}else{
		projectResponse =SucProjectSrv.getAll();  
		
		if(projectResponse.status>-1){           
			projectList = projectResponse.result;
		}
	}
	
	if(projectList.size()>0){
		for(i=0;i<projectList.size();i++){
			var projectStageFilter = ProjectStageFilter();
			projectStageFilter.idProject.exact(projectList.get(i).id, EQUALS_TO);
			if(stage!=null && stage!='null'){
				projectStageFilter.stageType.exact(stage, EQUALS_TO);
			}
//			logger.log("PROYECTO DE SUC");
			stageResponse=ProjectStagesSrv.getListByFilter(projectStageFilter);
//			logger.log("PROYECTO DE SUC");
			if(stageResponse.status>-1){ 
				stageList = stageResponse.result;
				for(j=0;j<stageList.size();j++){
					checkListResultSet = CheckListService.checkDocuments(7, stageList.get(j).id);
					if(checkListResultSet.status>-1){
						for(k=0;k<checkListResultSet.result.size();k++){
							if(checkListResultSet.result.get(k).check==false){
								if(stageList.get(j).stageStatus==0 || stageList.get(j).stageStatus==1){
									if(projectList.get(i).sucEntity.mall.id==mall){
										resultSet[counter]=new Array();
										resultSet[counter]['mall']=projectList.get(i).sucEntity.mall.name;
										resultSet[counter]['category']="Proyecto suc";
										resultSet[counter]['document']=checkListResultSet.result.get(k).documentTypeName;
										resultSet[counter]['project']=projectList.get(i).name + " (" + projectList.get(i).sucEntity.sucCode + ")";
										resultSet[counter]['area']="Arquitectura";
										resultSet[counter]['stage']=stageList.get(j).stageType.name;
										if(stageList.get(j).stageStatus==0){
											resultSet[counter]['stageStatus']="Cerrada"
										}
										if(stageList.get(j).stageStatus==1){
											resultSet[counter]['stageStatus']="Abierta"
										}
										if(stageList.get(j).stageStatus==2){
											resultSet[counter]['stageStatus']="En espera";
										}
										counter++;
									}
								}
							}
						}
					}
				}			
				
			}
		}
	}
}

model.resultSet=resultSet;