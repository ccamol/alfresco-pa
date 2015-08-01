<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">
var bodyContent = eval('(' + requestbody.content + ')');
var id= bodyContent.id ? bodyContent.id : null;
var nameProject= bodyContent.nameProject ? bodyContent.nameProject : null;
var year= bodyContent.year ? bodyContent.year : null;
var status= bodyContent.status ? bodyContent.status : null;
var from= bodyContent.from ? bodyContent.from : null;
var to= bodyContent.to ? bodyContent.to : null;
var projectFilter = new ProjectFilter();
var EQUALS_TO = 0;
var termsName = new Terms();


logger.log("===================================");
logger.log(nameProject + id +"estatus: "+ status);
if(id!=null){projectFilter.mall.exact(id, EQUALS_TO);}


if(nameProject!=null){
		var filters = nameProject.split(" ");
		for(i=0;i<filters.length;i++){
			termsName.add(filters[i]);
		}
		projectFilter.name.containsMultiple(termsName);
	}
if(status!=null){
	
	projectFilter.engineeringProjectStatusEntity.exact(status, EQUALS_TO);
	

}




//if(year!=null){projectFilter.createdDate.exact(year, EQUALS_TO);}


var resultSet = EngineeringProjectSrv.getListByFilter(projectFilter);



for(var i=0; i<resultSet.result.size();i++){
	if(!SecurityService.checkSecurity(resultSet.result.get(i).id, 2, 13)){
		resultSet.result.remove(i);
	}
}

model.resultSet = resultSet;

