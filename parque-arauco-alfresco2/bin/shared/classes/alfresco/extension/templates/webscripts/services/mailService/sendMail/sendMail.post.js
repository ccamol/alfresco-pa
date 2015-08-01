<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var idTender = bodyContent.idTender ? bodyContent.idTender : null;
var idStageType = bodyContent.idStageType ? bodyContent.idStageType : null;
var comment = 'Estimado(a)\n\nLa siguiente etapa ha finalizado ';


var query;
var nodes;
var email;
var hasEmail = false;
var emails = [];
var email = null;
var tenderName = null;
var contentData = [];

var applicantTenderFilter = ApplicantTenderFilter();
var EQUALS_TO = 0;

applicantTenderFilter.tender.exact(idTender, EQUALS_TO);
var result = ApplicantTenderSrv.getListByFilter(applicantTenderFilter).result;

for (var i = 0; i < result.size(); i++) {
	tenderName = result.get(i).tender.name;
	email =  result.get(i).applicant.mail;
	if(email !== null && email !== '') emails.push(email);
}

var stagetype = StageTypeTenderSrv.getById(idStageType);
if(stagetype.status > 0){
	var stageName = stagetype.result.name;
}



if(emails.length > 0){
	var url;
	var params;
	var subject = 'Notificación Gestor Documental';
	var templateName = 'send-to-applicant-close-stage.ftl';
	
	for(var x = 0; x < emails.length; x++){
		params = new java.util.HashMap();		
		params['to'] = ''+emails[x];
		params['subject'] = subject;
		params['templateName'] = templateName;
		params['from'] = ''+PropertyService.getProperty('mail.from.pa');
		params['body'] = comment + '\n\n' + ''+stageName + ' de la licitación '+ ''+tenderName;
		
		EmailService.sendEmail(params);
	}
}

model.status =  '1';
model.description = 'ok';
