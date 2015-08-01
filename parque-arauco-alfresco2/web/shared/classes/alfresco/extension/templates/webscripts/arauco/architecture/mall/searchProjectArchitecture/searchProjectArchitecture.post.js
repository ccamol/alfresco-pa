<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">
var bodyContent = eval('(' + requestbody.content + ')');
var filter= bodyContent.filter ? bodyContent.filter : null;
var nameProject= bodyContent.nameProject ? bodyContent.nameProject : null;
var statusProject= bodyContent.statusProject ? bodyContent.statusProject : null;
var dateFrom= bodyContent.dateFrom ? bodyContent.dateFrom : null;
var dateTo= bodyContent.dateTo ? bodyContent.dateTo : null;
var projectFilter = new ProjectFilter();
var EQUALS_TO = 0;
var termsName = new Terms();
var query = "from ArchitectureProjectEntity where";

if(dateFrom!=null){
	if(filter!=null){
		query = query + " mall="+filter;
	}
	if(nameProject!=null){
		query = query + " AND name LIKE '%"+nameProject+"%'";
	}
	if(statusProject!=null && statusProject!='none'){
		query = query + " AND projectStatusEntity="+statusProject;
	}
	
	if(dateTo!=null){
		query = query + " AND createDate>='"+dateFrom+"' AND createDate <='"+dateTo+"'";
	}else{
		query = query + " AND createDate='"+dateFrom+" 16:05:04.567'";
	}
	
//	logger.log(query);
	model.resultSet = ArchitectureProjectSrv.getAll(query);
}else{
	if(filter!=null){
		projectFilter.mall.exact(filter, EQUALS_TO);
	}

	if(nameProject!=null){
		var filters = nameProject.split(" ");
		for(i=0;i<filters.length;i++){
			termsName.add(filters[i]);
		}
		projectFilter.name.containsMultiple(termsName);
	}

	if(statusProject!=null && statusProject!=undefined && statusProject!='none'){
		projectFilter.projectStatusEntity.exact(statusProject, EQUALS_TO);
	}

	model.resultSet = ArchitectureProjectSrv.getListByFilter(projectFilter);
//	logger.log("===========================================");
}
