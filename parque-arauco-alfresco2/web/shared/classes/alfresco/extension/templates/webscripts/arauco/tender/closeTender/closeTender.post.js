<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idTender= bodyContent.idTender ? bodyContent.idTender : null;

var CONTAINS = 8;
var EQUALS_TO = 0;
var tender = new Tender();
var tenderObject = new Tender();
if(idTender !== null){
	tender = TendersSrv.getById(idTender);
	if(tender.status > -1){
		tenderObject.id = tender.result.id;
		tenderObject.tenderStatus = 0;
		tenderObject.projectName = tender.result.projectName;
		tenderObject.projectId = tender.result.projectId;
		tenderObject.projectTypeId = tender.result.projectTypeId;
		tenderObject.projectNodeType = NodeTypesService.getById(tender.result.projectNodeType.id).result;
		tenderObject.name = tender.result.name;
		tenderObject.initDate = tender.result.initDate;
		tenderObject.endDate = tender.result.endDate;
		tenderObject.awardApplicant = tender.result.awardApplicant;
		tenderObject.awardStatus = tender.result.awardStatus;
		tenderObject.organizationalArea = OrganizationalAreasSrv.getById(tender.result.organizationalArea.id).result;
		tenderObject.projectType = ProjectTypeSrv.getById(tender.result.projectType.id).result;
		var response = TendersSrv.addOrUpdate(tenderObject);
		if(response.status > -1){
			model.resultSet = response.status;
		}else{
			model.resultSet = -1;
		}
	}else{
		model.resultSet = -1;
	}
}else{
	model.resutlSet = -1;
}

