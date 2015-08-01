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
var nameProject = null;
var nameProjectSuc = null;

if (uuid != null && uuid != undefined && uuid != '') {
	query = "@sys\\:node-uuid:" + uuid;
	resultSet = search.luceneSearch(query);
	targetNode = resultSet[0];
	targetNode.specializeType('pa:paDocument');
	targetNode.addAspect("pa:generalData");
	
	var prefix = idProject.substr(0,6);
	var indexProject = idProject.substr(6);
	if(prefix.equals("proArc") || prefix.equals("ProSuc")){
		site = 'arquitectura';
	}else if(prefix.equals("proEng")){
		site = 'arauco';
	}
	
	if(prefix.equals("proArc")){
		result = ArchitectureProjectSrv.getById(indexProject).result;
		targetNode.properties["pa:projectID"] = result.id;
		targetNode.properties["pa:project"] = result.name;
		nameProject = result.name;
	}
	if(prefix.equals("ProSuc")){
		result = SucProjectSrv.getById(indexProject).result;
		targetNode.properties["pa:projectID"] = result.id;
		targetNode.properties["pa:project"] = result.name;
		nameProject = result.name;
		targetNode.properties["pa:sucNumberID"] = sucNumber;
		targetNode.properties["pa:sucNumber"] = sucNumber;
		targetNode.properties["pa:storeNameID"] = storeName;
	}
	if(prefix.equals("proEng")){
		result = EngineeringProjectSrv.getById(indexProject).result;
		targetNode.properties["pa:projectID"] = result.id;
		targetNode.properties["pa:project"] = result.name;
		nameProject = result.name;
	}

	
//	targetNode.properties["pa:stageID"] = stage;
//	targetNode.properties["pa:documentTypeID"] = documentType;
	targetNode.properties["pa:documentType"] = ""+documentType;
	targetNode.properties["pa:nodeType"] = nodeType;
//	targetNode.properties["pa:sucNumberID"] = sucNumber;
//	targetNode.properties["pa:projectID"] = idProject;
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
	if(nameProject !== null && nameProject !== undefined && nameProject !== '' && nameProject !== 'null'){
		path.push(nameProject);
	}
	if(nameProjectSuc !== null && nameProjectSuc !== undefined && nameProjectSuc !== '' && nameProjectSuc !== 'null'){
		path.push(nameProjectSuc);
	}
//	logger.log("UUID: "+uuid);
	DocumentService.moveDocument(uuid, path, "licitaciones");
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