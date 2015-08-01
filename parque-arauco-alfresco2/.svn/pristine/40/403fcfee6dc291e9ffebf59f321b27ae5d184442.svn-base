<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');
var idTender= bodyContent.idTender ? bodyContent.idTender : null;


if(idTender !== null){
	var tenderObject = new Tender();
	
	var result = DocumentService.sendMailVoidTender(tenderName, emails);
	model.resultSet = result;
}else{
	model.resultSet = "-1";
}
