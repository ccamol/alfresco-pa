<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');
var filter= bodyContent.section ? bodyContent.section : null;

if (bodyContent.uuid !== null) var uuid = bodyContent.uuid;
if (bodyContent.selectedElement !== null) var selectedElement = bodyContent.selectedElement;
if (bodyContent.site !== null) var site = bodyContent.site;

model.state="1";

var query = null;
var resulSet = null;
var node = null;
var targetNode = null
var varExtension = null;
var prefix = "pa";
var documentTypeID = bodyContent.documentTypeID;
var sucNumberID = bodyContent.sucNumberID;
var projectID = bodyContent.projectID;

var siteFolder=companyhome.childByNamePath("Sites/"+site+"/documentlibrary");
if(siteFolder == null){
	siteFolder=companyhome.childByNamePath("Sitios/"+site+"/documentLibrary");
}


if (uuid != null && uuid != undefined && uuid != '') {
	query = "@sys\\:node-uuid:" + uuid;
	resultSet = search.luceneSearch(query);
	targetNode = resultSet[0];
	targetNode.specializeType('pa:paDocument');
	targetNode.addAspect("pa:generalData");
	
	if(sucNumberID !== null && sucNumberID!== '' && sucNumberID !== undefined){
		targetNode.addAspect("pa:sucData");
	}
	if (projectID !== null && projectID !== '' && projectID !== undefined){
		targetNode.addAspect("pa:projectData");
	}
	if(documentTypeID !== null && documentTypeID !== undefined && documentTypeID !== ''){
		
		varExtension = GetDictionaryService.service("documentTypeAspectsList",documentTypeID, prefix);
		var nextElement;
		var aspects = new Array();
		for (var i=0; i<varExtension.size(); i++) {

			nextElement = varExtension.get(i);

			aspects = nextElement.aspect;
			targetNode.addAspect(prefix+":"+aspects+"");
		}
	}

}

//	Tipos de data tomados previamente utilizando DictionaryService
for (var key in bodyContent) {
    if (bodyContent.hasOwnProperty(key)) {
        if (key !== "uuid" && key !== "section" && key !== "selectedElement" && key !== "site") {
        	if (bodyContent[key] == "" || bodyContent[key] == null || bodyContent[key] == undefined) {
        	} else if (key.indexOf("$isDate") !== -1) {
        		targetNode.properties["pa:" + key.substring(0, key.length - "$isDate".length)]
        				= formatDate(bodyContent[key]);
        	//if its an INT
        	} else if (key.indexOf("$isInt") !== -1) {
        		targetNode.properties["pa:" + key.substring(0, key.length - "$isInt".length)]
        				= parseInt(bodyContent[key], 10);
        	//if its a STRING
        	} else {
        		targetNode.properties["pa:" + key] = bodyContent[key];
        	}
        }
    }
}


var path = new Array();
var mall = bodyContent.mall;
var sucNumber = bodyContent.sucNumber;
var project = bodyContent.project;
var documentType = bodyContent.documentType;

if(mall !== null && mall !== undefined && mall !== '' && mall !== 'null'){
	path.push(mall);
}
if(sucNumber !== null && sucNumber !== undefined && sucNumber !== '' && sucNumber !== 'null'){
	path.push(sucNumber);
}
if(project !== null && project !== undefined && project !== '' && project !== 'null'){
	path.push(project);
}
if(documentType !== null && documentType !== undefined && documentType !== '' && documentType !== 'null'){
	path.push(documentType);
}

var timeStamp = new Date().getTime();
targetNode.properties.content.encoding = "UTF-8";
var nodeName = targetNode.properties["cm:name"];
//var extension = nodeName.substring(nodeName.lastIndexOf("."));
targetNode.properties["cm:name"] = timeStamp + nodeName;
targetNode.save();


//Include worflow comprobation
var flowsFilter = new FlowByDocumentFilter();

flowsFilter.idDocument.exact(bodyContent.documentTypeID, EQUALS_TO);

var flowsByDocument = FlowByDocumentService.getListByFilter(flowsFilter);

if(flowsByDocument.status>-1){
	if(flowsByDocument.result.size()>0){
		if(flowsByDocument.result.get(0).idWorkFlow==1){
			createSimpleWorkflow(flowsByDocument.result.get(0).approvers);
		}else if(flowsByDocument.result.get(0).idWorkFlow==2){
			createMultipleWorkflow(flowsByDocument.result.get(0).approvers);
		}
	}else{
		DocumentService.moveDocument(bodyContent.uuid, path, bodyContent.site);

		if(selectedElement == null || selectedElement == undefined || selectedElement == ''){
			var thirdClassification="";
			
			if (site=="arauco") {
				 thirdClassification = ClassificationService.getEngineeringRoot();
			}
			if (site=="arquitectura") {
				thirdClassification = ClassificationService.getArchitectureRoot();
			}
			 
			var childrenList = ClassificationService.children(thirdClassification.result, false);
			for(var i=0;i<childrenList.result.size();i++){
				if(childrenList.result.get(i).name=="Terceros"){
					thirdFolder=childrenList.result.get(i);
				}
			}
			if(thirdFolder!=null){
				ClassificationService.classify(thirdFolder, uuid);
			}else{
				thirdFolder = ClassificationService.add(thirdClassification.result, "Terceros").result;
				ClassificationService.classify(thirdFolder, uuid);
			}
		}

		if(selectedElement !== null && selectedElement !== undefined && selectedElement !== ''){
			var classification = ClassificationService.getByUuid(selectedElement);
			ClassificationService.classify(classification.result, uuid);
		}
	}	
}else{
	DocumentService.moveDocument(bodyContent.uuid, path, bodyContent.site);
	var thirdFolder = null;

	if(selectedElement == null || selectedElement == undefined || selectedElement == ''){
		var thirdClassification = ClassificationService.getEngineeringRoot();
		var childrenList = ClassificationService.children(thirdClassification.result, false);
		for(var i=0;i<childrenList.result.size();i++){
			if(childrenList.result.get(i).name=="Terceros"){
				thirdFolder=childrenList.result.get(i);
			}
		}
		if(thirdFolder!=null){
			ClassificationService.classify(thirdFolder, uuid);
		}else{
			thirdFolder = ClassificationService.add(thirdClassification.result, "Terceros").result;
			ClassificationService.classify(thirdFolder, uuid);
		}
	}else{
		var classification = ClassificationService.getByUuid(selectedElement);
		ClassificationService.classify(classification.result, uuid);
	}
}

function createSimpleWorkflow(approvers){
	
	model.state=2;
	var workflowDefinition = workflow.getDefinitionByName("activiti$simpleApprovalProcess");

	var workflowPackage = workflow.createPackage();

	var workflowParameters = [];
	workflowParameters.workflowName = "activiti$simpleApprovalProcess";
	workflowParameters["bpm:workflowDescription"] = "Solicitud de aprobación para documento " + bodyContent.documentType;
	workflowParameters["bpm:percentComplete"] = "100";
	workflowParameters["bpm:startDate"] = new Date();
	workflowParameters["bpm:workflowPriority"] = 2;
	workflowParameters["pawf:simpleReviewer"] = approvers;
	workflowParameters["pawf:uuidClassification"] = selectedElement;
	var workflowPath = workflowDefinition.startWorkflow(workflowPackage, workflowParameters);

	var tasks = workflowPath.getTasks();
	for (task in tasks){
		WorkflowUtils.addDocument(tasks[task].getId(), uuid);
		var query = '@sys\\:node-uuid:' + uuid;
		var resultSet= search.luceneSearch(query);
		if(resultSet.length>0){
			for(var assocNode in targetNode.assocs["pa:downlaodAssoc"]){
				WorkflowUtils.addDocument(tasks[task].getId(), targetNode.assocs["pa:downlaodAssoc"][assocNode].getId());
			}
		}
		tasks[task].endTask(null);
	}
}
function formatDate(text){
	if(text==null||text==undefined||text==""){
		return null;
	}else{
		var dateValues = text.split("/");
		return new Date(dateValues[2],dateValues[1]-1,dateValues[0]);

	}

}
function createMultipleWorkflow(approvers){
	model.state=2;
	var workflowDefinition = workflow.getDefinitionByName("activiti$multipleApprovalProcess");

	var workflowPackage = workflow.createPackage();

	var workflowParameters = [];
	workflowParameters.workflowName = "activiti$multipleApprovalProcess";
	workflowParameters["bpm:workflowDescription"] = "Solicitud de aprobaciÃ³n para documento " + bodyContent.documentType;
	workflowParameters["bpm:percentComplete"] = "100";
	workflowParameters["bpm:startDate"] = new Date();
	workflowParameters["bpm:workflowPriority"] = 2;
	workflowParameters["pawf:reviewers"] = approvers;
	workflowParameters["pawf:counter"] = 0;
	workflowParameters["pawf:conditionReviewer"] = 1;
	workflowParameters["pawf:uuidClassification"] = selectedElement;
	var workflowPath = workflowDefinition.startWorkflow(workflowPackage, workflowParameters);

	var tasks = workflowPath.getTasks();
	for (task in tasks){
		WorkflowUtils.addDocument(tasks[task].getId(), uuid);
		var query = '@sys\\:node-uuid:' + uuid;
		var resultSet= search.luceneSearch(query);
		if(resultSet.length>0){
			for(var assocNode in targetNode.assocs["pa:downlaodAssoc"]){
				WorkflowUtils.addDocument(tasks[task].getId(), targetNode.assocs["pa:downlaodAssoc"][assocNode].getId());
			}
		}
		tasks[task].endTask(null);
	}
}
