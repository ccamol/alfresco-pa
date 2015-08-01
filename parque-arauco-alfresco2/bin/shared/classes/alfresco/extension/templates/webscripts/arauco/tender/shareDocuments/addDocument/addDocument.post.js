<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');


var uuid= bodyContent.uuid ? bodyContent.uuid : null;
var description= bodyContent.description ? bodyContent.description : null;
var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var type= bodyContent.type ? bodyContent.type : null;
var format= bodyContent.format ? bodyContent.format : null;
var name= bodyContent.name ? bodyContent.name : null;
var documentType= bodyContent.documentType ? bodyContent.documentType : null;
var createdDate= bodyContent.createdDate ? bodyContent.createdDate : null;

var documentsToCarry = new DocumentsToCarry();
var tender = new Tender();
var applicant = new Applicant();


if(uuid !== null && description !== null && idTender !== null && name !== null){
	documentsToCarry.tender = TendersSrv.getById(idTender).result;
	documentsToCarry.uuid = uuid;
	documentsToCarry.name = name;
	documentsToCarry.format = format;
	documentsToCarry.description = description;
	documentsToCarry.type = type;
	documentsToCarry.documentType = documentType;
	if(createdDate !== null){
		documentsToCarry.createdDate = formatDate(createdDate);
	}
	var result = DocumentsToCarrySrv.add(documentsToCarry);
	if(result.status > -1){
		model.resultSet = result;
	}else{
		model.resultSet = null;
	}
}else{
	model.resultSet = null;
}

function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], 16,5,4,567);
}