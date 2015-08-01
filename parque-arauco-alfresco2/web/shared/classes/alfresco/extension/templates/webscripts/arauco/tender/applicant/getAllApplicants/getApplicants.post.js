<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idTender= bodyContent.idTender ? bodyContent.idTender : null;


var applicantObject = ApplicantSrv.getAll().result;
if(applicantObject !== null){
	model.resultSet = applicantObject;	
}else{
	model.resultSet = null;	
}

