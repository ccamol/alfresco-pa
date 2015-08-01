<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var nodeType= bodyContent.nodeType ? bodyContent.nodeType : null;
var nodeId= bodyContent.nodeId ? bodyContent.nodeId : null;
var uuidDocument= bodyContent.uuidDocument ? bodyContent.uuidDocument : null;
var uuidFolder= bodyContent.uuidFolder ? bodyContent.uuidFolder : null;
var sucNumber = null;

nodo1 = companyhome.childByNamePath("Diccionario de datos");
if(nodo1 == null || nodo1 == undefined ){
	nodo1 = companyhome.childByNamePath("Data Dictionary");
}
var varUuid="";
var destinationFolder = nodo1.childByNamePath("LogicalNode");


if(destinationFolder==null || destinationFolder == undefined ) destinationFolder=createFolder("LogicalNode");

var node = destinationFolder.createNode(null,"cm:content");
varUuid = node.properties["sys:node-uuid"];
node.specializeType("pa:paDocument");
logger.log(varUuid + " ### NUEVO NODO");
node.properties["pa:statusAssoc"] = true;
//node.properties["clasf:parentUuid"] = uuidFolder;
node.properties["pa:parentDocument"] = uuidDocument;

//node.addAspect("pa:generalData");

query = "@sys\\:node-uuid:" + uuidDocument;
resultSet = search.luceneSearch(query);
var associated = resultSet[0];

node.properties["cm:name"] = associated.properties["cm:name"];
node.properties["pa:mall"] = associated.properties["pa:mall"];
node.properties["pa:mallID"] = associated.properties["pa:mallID"];
node.properties["pa:mallType"] = associated.properties["pa:mallType"];
node.properties["pa:countryID"] = associated.properties["pa:countryID"];
node.properties["pa:country"] = associated.properties["pa:country"];
node.properties["pa:documentType"] = associated.properties["pa:documentType"];
node.properties["pa:documentTypeID"] = associated.properties["pa:documentTypeID"];
node.properties["pa:documentDate"] = associated.properties["pa:documentDate"];
node.properties["pa:sectionID"] = associated.properties["pa:sectionID"];
node.save();

if(associated.properties["pa:stageID"] != undefined && associated.properties["pa:stageID"] != null){
	var stageID = associated.properties["pa:stageID"];
	var stage = associated.properties["pa:stage"];
	node.properties["pa:stageID"] = nodeId;
	node.properties["pa:stage"] = stage;
}

if(associated.properties["pa:projectID"] != undefined && associated.properties["pa:projectID"] != null){
	node.addAspect("pa:projectData");
	var projectID = associated.properties["pa:projectID"];
	var project = associated.properties["pa:project"];
	node.properties["pa:projectID"] = projectID;
	node.properties["pa:project"] = project;
}

if(associated.properties["pa:subsectionID"] != undefined && associated.properties["pa:subsectionID"] != null){
	var subsectionID = associated.properties["pa:subsectionID"];
	var subsection = associated.properties["pa:subsection"];
	node.properties["pa:subsectionID"] = subsectionID;
	node.properties["pa:subsection"] = subsection;
}

if(associated.properties["pa:serieID"] != undefined && associated.properties["pa:serieID"] != null){
	var serieID = associated.properties["pa:serieID"];
	var serie = associated.properties["pa:serie"];
	node.properties["pa:serieID"] = serieID;
	node.properties["pa:serie"] = serie;
}

switch (nodeType){ 
case "2":
	node.properties["pa:projectID"] = nodeId;
	node.properties["pa:nodeType"] = nodeType;
	break;
case "3":
	node.addAspect("pa:sucData");
	node.properties["pa:sucNumber"] = nodeId;
	node.properties["pa:sucNumberID"] = nodeId;
	node.properties["pa:nodeType"] = nodeType;
	break;
case "4":
	node.addAspect("pa:sucData");
	node.properties["pa:sucNumber"] = nodeId;
	node.properties["pa:sucNumberID"] = nodeId;
	node.properties["pa:nodeType"] = nodeType;
	break;
case "5":
	node.properties["pa:stageID"] = nodeId;
	node.properties["pa:nodeType"] = nodeType;
	break;
case "6":
	node.properties["pa:stageID"] = nodeId;
	node.properties["pa:nodeType"] = nodeType;
	break;
case "7":
	node.properties["pa:stageID"] = nodeId;
	node.properties["pa:nodeType"] = nodeType;
	break;
case "8":
	node.properties["pa:stageID"] = nodeId;
	node.properties["pa:nodeType"] = nodeType;
	break;
case "9":
	node.properties["pa:nodeType"] = nodeType;
	break;
case "10":
	node.properties["pa:projectID"] = nodeId;
	node.properties["pa:nodeType"] = nodeType;
	break;
}

node.save();

var path = new Array();
path.push("LogicalNode");

if(associated.properties["pa:mall"] !== null && associated.properties["pa:mall"] !== undefined && associated.properties["pa:mall"] !== '' && associated.properties["pa:mall"] !== 'null'){
	path.push(associated.properties["pa:mall"]);
}
if(node.properties["pa:sucNumber"] !== null && node.properties["pa:sucNumber"] !== undefined && node.properties["pa:sucNumber"] !== '' && node.properties["pa:sucNumber"] !== 'null'){
	path.push(node.properties["pa:sucNumber"]);
}
if(associated.properties["pa:project"] !== null && associated.properties["pa:project"] !== undefined && associated.properties["pa:project"] !== '' && associated.properties["pa:project"] !== 'null'){
	path.push(associated.properties["pa:project"]);
}
if(associated.properties["pa:documentType"] !== null && associated.properties["pa:documentType"] !== undefined && associated.properties["pa:documentType"] !== '' && associated.properties["pa:documentType"] !== 'null'){
	path.push(associated.properties["pa:documentType"]);
}

//Valida sitio en el donde se encuentra el documento, sacandolo del original
if (associated.properties["pa:sectionID"]==2 || associated.properties["pa:sectionID"] == "2") {
	DocumentService.moveDocument(varUuid, path, "arauco");
	thirdClassification = ClassificationService.getEngineeringRoot();
}
if (associated.properties["pa:sectionID"]==1 || associated.properties["pa:sectionID"] == "1") {
	DocumentService.moveDocument(varUuid, path, "arquitectura");
	thirdClassification = ClassificationService.getArchitectureRoot();
}

var classification = ClassificationService.getByUuid(uuidFolder);
ClassificationService.classify(classification.result, varUuid);

function createFolder(folderName){
	return nodo1.createFolder(folderName);
}
