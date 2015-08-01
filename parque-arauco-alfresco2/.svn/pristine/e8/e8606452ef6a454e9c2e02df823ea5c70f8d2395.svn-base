<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var awardStatus= bodyContent.awardStatus ? bodyContent.awardStatus : null;
var awardApplicant= bodyContent.awardApplicant ? bodyContent.awardApplicant : null;


var tender = new Tender();
var tenderObject = TendersSrv.getById(idTender).result;
tender.id = tenderObject.id;
tender.tenderStatus = tenderObject.tenderStatus;
tender.name = tenderObject.name;
tender.organizationalArea = tenderObject.organizationalArea;
tender.initDate = tenderObject.initDate;
tender.endDate = tenderObject.endDate;
tender.projectNodeType = tenderObject.projectNodeType;
tender.projectId = tenderObject.projectId;
tender.projectName = tenderObject.projectName;
tender.projectType = tenderObject.projectType;
tender.participant = tenderObject.participant;
tender.awardStatus = awardStatus;
tender.awardApplicant = awardApplicant;
var response = TendersSrv.addOrUpdate(tender);
model.resultSet = response;


