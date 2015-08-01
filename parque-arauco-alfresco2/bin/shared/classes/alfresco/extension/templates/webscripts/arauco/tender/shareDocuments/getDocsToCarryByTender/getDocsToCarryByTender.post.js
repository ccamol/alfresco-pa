<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var type= bodyContent.type ? bodyContent.type : null;

var EQUALS_TO = 0;
var documentsToCarryFilter = DocumentsToCarryFilter();
var documentToCarryObject = null;

if(idTender !== null && idTender !== '' && idTender !== undefined){
	documentsToCarryFilter.tender.exact(idTender, EQUALS_TO);
	documentsToCarryFilter.type.exact(type, EQUALS_TO);

	documentToCarryObject = DocumentsToCarrySrv.getListByFilter(documentsToCarryFilter);
	if(documentToCarryObject.status > -1){
		model.resultSet = documentToCarryObject.result;	
	}else{
		model.resultSet = null;
	}
}else{
	model.resultSet = null;
}

