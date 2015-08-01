<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">
var bodyContent = eval('(' + requestbody.content + ')');
var filter= bodyContent.filter ? bodyContent.filter : null;
var sucType = bodyContent.sucType ? bodyContent.sucType : null;
var sucSearch = bodyContent.sucSearch ? bodyContent.sucSearch : null;
var statusFilterSuc = bodyContent.statusFilterSuc ? bodyContent.statusFilterSuc : null;
var termsName = new Terms();
var sucFilter = new SucFilter();
var EQUALS_TO = 0;


if(filter!=null){
	sucFilter.mall.exact(filter, EQUALS_TO);
}
if(sucType != null){
	
	if(statusFilterSuc !=null && statusFilterSuc != undefined && statusFilterSuc != "none"){
		sucFilter.status.exact(statusFilterSuc, EQUALS_TO);
	}
	
	if(sucSearch !=null && sucSearch != undefined){
		var filters = sucSearch.split(" ");
		for(i=0;i<filters.length;i++){
			termsName.add(filters[i]);
		}
		sucFilter.sucType.exact(sucType, EQUALS_TO);
		sucFilter.sucCode.containsMultiple(termsName);
	}else{
		sucFilter.sucType.exact(sucType, EQUALS_TO);
	}
}
if (filter==0) {
	resultSet = SucSrv.getAll();
}else{
	resultSet = SucSrv.getListByFilter(sucFilter);
}

if(resultSet.status > -1){
	model.resultSet = resultSet;
}else{
	model.resultSet = null;
}

//logger.log(SucSrv.getListByFilter(sucFilter));