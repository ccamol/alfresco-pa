<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');


var idDocToCarry= bodyContent.idDocToCarry ? bodyContent.idDocToCarry : null;


var documentsToCarry = new DocumentsToCarry();

if(idDocToCarry !== null){
	documentsToCarry = DocumentsToCarrySrv.getById(idDocToCarry).result;
	var result = DocumentsToCarrySrv.remove(documentsToCarry);
	if(result.status > -1){
		model.resultSet = result;
	}else{
		model.resultSet = null;
	}
}else{
	model.resultSet = null;
}