<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">
var bodyContent = eval('(' + requestbody.content + ')');
var id= bodyContent.id ? bodyContent.id : null;
var nameProject= bodyContent.nameProject ? bodyContent.nameProject : null;
var status= bodyContent.status ? bodyContent.status : null;
var dateFrom= bodyContent.dateFrom ? bodyContent.dateFrom : null;
var dateTo= bodyContent.dateTo ? bodyContent.dateTo : null;
var projectFilter = new ProjectFilter();
var EQUALS_TO = 0;
var termsName = new Terms();
var query = "from EngineeringProjectEntity where";

if(dateFrom!=null){
	if(id!=null){
		query = query + " mall="+id;
	}
	if(nameProject!=null){
		query = query + " AND name LIKE '%"+nameProject+"%'";
	}
	if(status!=null && status!='none'){
		query = query + " AND projectStatusEntity="+status;
	}
	
	if(dateTo!=null){
		query = query + " AND createdDate>='"+dateFrom+"' AND createdDate <='"+dateTo+"'";
	}else{
		query = query + " AND createdDate='"+dateFrom+" 16:05:04.567'";
	}
	
	logger.log(query);
	model.resultSet = EngineeringProjectSrv.getAll(query);
}else{
	if(id!=null){
		projectFilter.mall.exact(id, EQUALS_TO);
	}

	if(nameProject!=null){
		var filters = nameProject.split(" ");
		for(i=0;i<filters.length;i++){
			termsName.add(filters[i]);
		}
		projectFilter.name.containsMultiple(termsName);
	}

	if(status!=null && status!=undefined && status!='none'){
		projectFilter.projectStatusEntity.exact(status, EQUALS_TO);
	}

	model.resultSet = EngineeringProjectSrv.getListByFilter(projectFilter);
	logger.log("===========================================");
}

