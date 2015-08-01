<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idProject= bodyContent.idProject ? bodyContent.idProject : null;
var thirdPartyProjectFilter = null;
var getProjects = null;
var EQUALS_TO = 0;
var var1="";
var var2="";
var subgroup = null;
var subgroupSelected = null;
var validate;
var val = new Array();

groupValidate = groups.getGroup("TERCEROS");
if(groupValidate != null){
	thirdPartyProjectFilter = new ThirdPartyProjectFilter();
	thirdPartyProjectFilter.architectureProjectEntity.exact(idProject, EQUALS_TO);
	getProjects = ThirdPartyProjectsService.getListByFilter(thirdPartyProjectFilter).result;
	groupList = groups.getGroup("TERCEROS").getChildGroups();
	subgroup = new Array();

	for ( var j = 0; j < groupList.length; j++) {
		var vali = false;
//		logger.log(groupList[j].fullName + "   HIJOS GRUPO");
		for ( var y = 0; y < getProjects.size(); y++) {
//			logger.log(getProjects.get(y).fullNameGroup + "   GRUPOS BD");
			if(""+groupList[j].fullName == ""+getProjects.get(y).fullNameGroup){
				vali = true;
				break;
			}else{
				vali = false;
				
			}
		}
		
		if(!vali){
			subgroup[j] = groupList[j];
		}
	}
	
}else{
//	logger.log("No existe el grupo");
}

if(subgroup != null){
	model.resultSet = subgroup;
	model.idProject = idProject;
}else{
	model.resultSet = null;
}

