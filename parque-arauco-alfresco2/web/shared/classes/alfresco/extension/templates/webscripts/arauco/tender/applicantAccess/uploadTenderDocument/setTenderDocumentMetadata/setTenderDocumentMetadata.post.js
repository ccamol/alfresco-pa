<import resource="classpath:alfresco/extension/objectModel.js">
<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');
var uuid = bodyContent.uuid ? bodyContent.uuid : null;
var documentTypeId = bodyContent.documentTypeId ? bodyContent.documentTypeId : null;
var documentName = bodyContent.documentName ? bodyContent.documentName : null;
var docRequiredId = bodyContent.docRequiredId ? bodyContent.docRequiredId : null;
var tenderId = bodyContent.tenderId ? bodyContent.tenderId : null;


var date = new Date();
var documentType;
model.status="1";

if (uuid !== null && uuid !== undefined && uuid !== '') {
	var query = "@sys\\:node-uuid:" + uuid;
//	logger.log("****************************");
//	logger.log(" ### arauco/setTenderDocumentMetadata.post.js QUERY: " + query);
//	logger.log("****************************");
	resultSet = search.luceneSearch(query);
	targetNode = resultSet[0];
	
	targetNode.specializeType('pa:paDocument');
	targetNode.addAspect("pa:generalData"); //mandatory aspect??
	
	//generalData mandatory properties
	targetNode.properties["pa:mall"] = "tenderDocTest";
	targetNode.properties["pa:mallType"] = "tenderDocTest";
	
	var queryCreated = '@cm\:name:"'+documentName+'"';
	
	
	var timeStamp = new Date().getTime();
	
	//properties
	targetNode.properties["cm:name"] = documentName;
	targetNode.properties["pa:documentDate"] = date;
	targetNode.properties["pa:documentTypeID"] = documentTypeId;
	targetNode.name=timeStamp+documentName;
	targetNode.properties.content.encoding = "UTF-8";
	targetNode.save();

}

var path = new Array();

var tenderName = bodyContent.tenderName ? bodyContent.tenderName : null;
var userName = person.properties.userName;
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDay();

path.push(tenderName, userName, year, month, day);
//save bd

var requestedDocumentApplicant = new  RequestedDocumentApplicant();


requestedDocumentApplicant.uuidDocument = uuid;
requestedDocumentApplicant.userTender = userName;
requestedDocumentApplicant.idTender = tenderId;
requestedDocumentApplicant.fechaCarga = date;

var docObjToCarry =   DocumentsToCarrySrv.getById(docRequiredId);
requestedDocumentApplicant.documentToCarry = docObjToCarry.result;


RequestedDocumentApplicantsSrv.add(requestedDocumentApplicant);





function formatDate(text){
	if(text==null||text==undefined||text==""){
		return null;
	}else{
		var dateValues = text.split("/");
		return new Date(dateValues[2],dateValues[1]-1,dateValues[0]);

	}

}

