<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">
var bodyContent = eval('(' + requestbody.content + ')');
var filter= bodyContent.filter ? bodyContent.filter : null;
var projectSuc= bodyContent.projectSuc ? bodyContent.projectSuc : null;
var statusFilterProject= bodyContent.statusFilterProject ? bodyContent.statusFilterProject : null;
var sucProjectFilter = SucProjectFilter();
var termsName = new Terms();
if(filter!=null){
	if(statusFilterProject!=null && statusFilterProject!=undefined && statusFilterProject!=0 && statusFilterProject!='0'){
		sucProjectFilter.projectStatusEntity.exact(statusFilterProject, EQUALS_TO);
	}
	
	var EQUALS_TO = 0;
	if(projectSuc !=null && projectSuc != undefined){
		var filters = projectSuc.split(" ");
		for(i=0;i<filters.length;i++){
			termsName.add(filters[i]);
		}
		sucProjectFilter.name.containsMultiple(termsName);
		sucProjectFilter.sucEntity.exact(filter, EQUALS_TO);
	}else{
		sucProjectFilter.sucEntity.exact(filter, EQUALS_TO);
	}
}

if (filter==0) {
	resultSet = SucProjectSrv.getAll();
}else{
	resultSet = SucProjectSrv.getListByFilter(sucProjectFilter);
}

if(resultSet.status > -1){
	model.resultSet = resultSet;
}else{
	model.resultSet = null;
}

