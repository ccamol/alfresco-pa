<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');
var filter= bodyContent.section ? bodyContent.section : null;

if (bodyContent.uuid !== null) var uuid = bodyContent.uuid;
if (bodyContent.stage !== null) var stage = bodyContent.stage;
if (bodyContent.documentType !== null) var documentType = bodyContent.documentType;
if (bodyContent.nodeType !== null) var nodeType = bodyContent.nodeType;
if (bodyContent.sucNumber !== null) var sucNumber = bodyContent.sucNumber;
if (bodyContent.idProject !== null) var idProject = bodyContent.idProject;
if (bodyContent.storeName !== null) var storeName = bodyContent.storeName;
if (bodyContent.mall !== null) var mall = bodyContent.mall;
if (bodyContent.mallID !== null) var mallID = bodyContent.mallID;
if (bodyContent.country !== null) var country = bodyContent.country;
if (bodyContent.countryID !== null) var countryID = bodyContent.countryID;
if (bodyContent.mallIDSAP !== null) var mallIDSAP = bodyContent.mallIDSAP;
if (bodyContent.mallType !== null) var mallType = bodyContent.mallType;
if (bodyContent.docTypeName !== null) var docTypeName = bodyContent.docTypeName;

var selectedElement = null;


model.state="1";

var query = null;
var resulSet = null;


if (uuid != null && uuid != undefined && uuid != '') {
	query = "@sys\\:node-uuid:" + uuid;
	resultSet = search.luceneSearch(query);
	targetNode = resultSet[0];
	targetNode.specializeType('pa:paDocument');
	targetNode.addAspect("pa:generalData");

	targetNode.properties["pa:stageID"] = stage;
	targetNode.properties["pa:documentTypeID"] = documentType;
	targetNode.properties["pa:documentType"] = docTypeName;
	targetNode.properties["pa:nodeType"] = nodeType;
	targetNode.properties["pa:sucNumberID"] = sucNumber;
	targetNode.properties["pa:projectID"] = idProject;
	//targetNode.properties["pa:storeNameID"] = storeName;
	targetNode.properties["pa:mall"] = mall;
	targetNode.properties["pa:mallID"] = mallID;
	targetNode.properties["pa:country"] = country;
	targetNode.properties["pa:countryID"] = countryID;
	targetNode.properties["pa:mallIDSAP"] = mallIDSAP;
	targetNode.properties["pa:mallType"] = mallType;
	targetNode.properties["pa:documentDate"] = formatDate(getCurrentDate());
	targetNode.properties["pa:sectionID"] = 1;
	
	

	targetNode.save();
	
	Transform.createFlashPreview(uuid);

	var path = new Array();

	if(mall !== null && mall !== undefined && mall !== '' && mall !== 'null'){
		path.push(mall);
	}
	if(sucNumber !== null && sucNumber !== undefined && sucNumber !== '' && sucNumber !== 'null'){
		path.push(sucNumber);
	}
	if(idProject !== null && idProject !== undefined && idProject !== '' && idProject !== 'null'){
		path.push(idProject);
	}
	if(docTypeName !== null && docTypeName !== undefined && docTypeName !== '' && docTypeName !== 'null'){
		path.push(docTypeName);
	}
//	logger.log("UUID: "+uuid);
	DocumentService.moveDocument(uuid, path, "arquitectura");
}



if(selectedElement == null || selectedElement == undefined || selectedElement == ''){
	var thirdClassification="";

	thirdClassification = ClassificationService.getArchitectureRoot();
	var thirdFolder=null;
	var childrenList = ClassificationService.children(thirdClassification.result, false);
	for(var i=0;i<childrenList.result.size();i++){
		if(childrenList.result.get(i).name=="Operadores"){
			thirdFolder=childrenList.result.get(i);
		}
	}
	if(thirdFolder!=null){
		ClassificationService.classify(thirdFolder, uuid);
	}else{
		thirdFolder = ClassificationService.add(thirdClassification.result, "Operadores").result;
		ClassificationService.classify(thirdFolder, uuid);
	}
}

function formatDate(text){
	if(text==null||text==undefined||text==""){
		return null;
	}else{
		var dateValues = text.split("/");
		return new Date(dateValues[2],dateValues[1]-1,dateValues[0], dateValues[3], dateValues[4], dateValues[5]);

	}

}
function getCurrentDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	var hh = today.getHours();
	var minutes = today.getMinutes();
	var ss = today.getSeconds();

	if(dd<10) {
		dd='0'+dd
	} 

	if(mm<10) {
		mm='0'+mm
	} 
	if(hh<10) {
		hh='0'+hh
	} 
	if(minutes<10) {
		minutes='0'+minutes
	} 
	if(ss<10) {
		ss='0'+ss
	} 

	today = dd+'/'+mm+'/'+yyyy+'/'+hh+'/'+minutes+'/'+ss;
	return today;
}