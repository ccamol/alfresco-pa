<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
//var bodyContent = eval('(' + requestbody.content + ')');
//var idSuc= bodyContent.filter ? bodyContent.filter : null;
var sucProjectFilter = new SucProjectFilter();
var EQUALS_TO = 0;
var username=person.properties.userName;
var projectSucElements=[];
var CONTAINS = 8;
var projectStageFilter = new ProjectStageFilter();
var resultProjectStageFilter=null;
resultProjectFilterElements=[];
if(username!=null || username!=undefined || username!=''){
	var person = people.getPerson(username);
	var src_groups=people.getContainerGroups(person);
	var groupId=null;
	var groupName = null;
	var groupNameProfile = new Array();
	var groupNameRol = new Array();
	var j = 0;
	var k = 0;
	var z = 0;
	var nameGroupDisplay=[];
	var sucFilter = new SucFilter();
	var idProjectValidate=[];
	var idsMall2 = []; 
	var thirdPartyProjectFilter = new ThirdPartyProjectFilter();
	var flahIdSuc=1;
	
	var architectureProjectFilter = new ArchitectureProjectFilter();
	var statusStage=null;
	if(src_groups.length>0){
		for(var i=0;i<src_groups.length;i++){
			groupId=src_groups[i].properties["cm:authorityName"];
			groupName = src_groups[i].properties["cm:authorityDisplayName"];
			if(groupName!=null && groupName != undefined && groupName != ''){
				nameGroupDisplay.push(groupName);
			}
		}
	}
}
var idProject;
var idTypeProject;
var operatorFilter = new OperatorFilter();
for(var a=0;a<nameGroupDisplay.length;a++){
	operatorFilter.name.exact(nameGroupDisplay[a], CONTAINS);
	thirdPartyProjectFilter.thirdPartyName.exact(nameGroupDisplay[a], CONTAINS);
	 var thirdPartyObjects = ThirdPartyProjectsService.getListByFilter(thirdPartyProjectFilter);
	var operatorsObject = OperatorSrv.getListByFilter(operatorFilter);
	for (var i = 0; i < thirdPartyObjects.result.size(); i++) {

		flahIdSuc=1;
		for (var b = 0; b < idProjectValidate.length; b++) {
			
			idsMall2.push((thirdPartyObjects.result.get(i).architectureProjectEntity).toString());
			if(idProjectValidate[b].toString().trim()+"" == idsMall2[0].toString().trim()+""){
			
//				logger.log("no agrega: "+idProjectValidate[b].toString().trim()+"" == idsMall2[0].toString().trim()+"");
				flahIdSuc=0;
			}
		}
		if(flahIdSuc!=0){
//			logger.log(" agrega");
			idProjectValidate.push(thirdPartyObjects.result.get(i).architectureProjectEntity);
			flahIdSuc=1;
		}
	
	}
	
	
}

for (var x = 0; x < idProjectValidate.length; x++) {
	
//	logger.log("entro id:"+ idProjectValidate[x]);
	
	architectureProjectFilter.id.exact(idProjectValidate[x], EQUALS_TO);
//	logger.log("===========================trae proyectos de arquitectura============================");
//	logger.log("=======================================================================================");
	var	resultSetProjectSuc = ArchitectureProjectSrv.getListByFilter(architectureProjectFilter);
	for (var h = 0; h < resultSetProjectSuc.result.size(); h++) {
		
		idProject = resultSetProjectSuc.result.get(h).id;
		
		idTypeProject= resultSetProjectSuc.result.get(h).projectType.id;
		
		projectStageFilter.idProject.exact(idProject, EQUALS_TO);
		
		projectStageFilter.idProjectType.exact(idTypeProject, EQUALS_TO);
		
		resultProjectStageFilter = ProjectStagesSrv.getListByFilter(projectStageFilter);
		
		
		for (var p = 0; p < resultProjectStageFilter.result.size(); p++) {
			
			resultProjectFilterElements.push(resultProjectStageFilter.result.get(p));
			
			
			
		}
		projectSucElements.push(resultSetProjectSuc.result.get(h));
	}
	
}




model.resultSet = projectSucElements;
model.resultSetStatus = resultProjectFilterElements;