<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');
var filter= bodyContent.section ? bodyContent.section : null;

var mallType= bodyContent. mallType ? bodyContent. mallType : null;
var mall= bodyContent. mall ? bodyContent. mall : null;
var mallID= bodyContent.mallID ? bodyContent.mallID : null;
var country = bodyContent.country ? bodyContent.country : null;
var countryID= bodyContent.countryID ? bodyContent.countryID : null;
var mallIDSAP= bodyContent.mallIDSAP ? bodyContent.mallIDSAP : null;
var idProject= bodyContent.idProject ? bodyContent.idProject : null;
var stageID= bodyContent.stageID ? bodyContent.stageID : null;
var stage= bodyContent.stage ? bodyContent.stage : null;
var project= bodyContent.project ? bodyContent.project : null;
var sucNumberID= bodyContent.sucNumberID ? bodyContent.sucNumberID : null;
var sucNumber= bodyContent.sucNumber ? bodyContent.sucNumber : null;



if (bodyContent.uuid !== null) var uuid = bodyContent.uuid;
if (bodyContent.selectedElement !== null) var selectedElement = bodyContent.selectedElement;

var query = null;
var resulSet = null;
var node = null;
var targetNode = null

if (uuid != null && uuid != undefined && uuid != '') {
	query = "@sys\\:node-uuid:" + uuid;
	resultSet = search.luceneSearch(query);
	targetNode = resultSet[0];




	if (bodyContent.mallType !== null && bodyContent.mallType !== ''){
//		logger.log("mallType: "+bodyContent.mallType);
		targetNode.properties["pa:mallType"] = bodyContent.mallType;
	}

	if (bodyContent.mall !== null && bodyContent.mall !== ''){
//		logger.log("mall: "+bodyContent.mall);
		targetNode.properties["pa:mall"] = bodyContent.mall;
	}
	if (bodyContent.mallID !== null && bodyContent.mallID !== ''){
//		logger.log("mallID: "+bodyContent.mallID);
		targetNode.properties["pa:mallID"] = bodyContent.mallID;
	}
	if (bodyContent.country !== null && bodyContent.country !== ''){
//		logger.log("country: "+bodyContent.country);
		targetNode.properties["pa:country"] = bodyContent.country;
	}
	if (bodyContent.countryID !== null && bodyContent.countryID !== ''){
//		logger.log("countryID: "+bodyContent.countryID);
		targetNode.properties["pa:countryID"] = bodyContent.countryID;
	}
	if (bodyContent.mallIDSAP !== null && bodyContent.mallIDSAP !== ''){
//		logger.log("mallIDSAP: "+bodyContent.mallIDSAP);
		targetNode.properties["pa:mallIDSAP"] = bodyContent.mallIDSAP;
	}
	if (idProject !== null && idProject !== ''){
//		logger.log("idProject: "+bodyContent.idProject);
		targetNode.properties["pa:idProject"] = idProject;
	}
	if (bodyContent.stageID!== null && bodyContent.stageID !==''){
//		logger.log("stageID: "+bodyContent.stageID);
		targetNode.properties["pa:stageID"] = bodyContent.stageID;
	}
	if (bodyContent.stage!== null && bodyContent.stage !==''){
//		logger.log("stage: "+bodyContent.stage);
		targetNode.properties["pa:stage"] = bodyContent.stage;
	}
	if (bodyContent.project!== null && bodyContent.project !==''){
//		logger.log("project: "+bodyContent.project);
		targetNode.properties["pa:project"] = bodyContent.project;
	}
	if (bodyContent.sucNumberID!== null && bodyContent.sucNumberID !==''){
//		logger.log("sucNumberID: "+bodyContent.sucNumberID);
		targetNode.properties["pa:sucNumberID"] = bodyContent.sucNumberID;
	}
	if (bodyContent.sucNumber!== null && bodyContent.sucNumber!==''){
//		logger.log("sucNumber: "+bodyContent.sucNumber);
		targetNode.properties["pa:sucNumber"] = bodyContent.sucNumber;
	}
	
	
	targetNode.save();
	model.state="1";

}else{
	model.state = "-1";
}