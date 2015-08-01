<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var stageId= args.stageId ? args.stageId : null;
var resultSet=null;

var node="";
var nodes = [];
var flahIdSuc=1;
var thirdPartySharedDocumentFilter = new ThirdPartySharedDocumentFilter();
var EQUALS_TO = 0;
var CONTAINS = 8;
var documents=[];
var username = person.properties.userName;
var uuid2 = []; 
if(username!=null || username!=undefined || username!=''){
//	logger.log("CTL-1");
	var person = people.getPerson(username);
	var src_groups=people.getContainerGroups(person);
	var groupId=null;
	var groupName = null;
	var nameGroupDisplay=[];

	var sucProjectFilter = new SucProjectFilter();
	if(src_groups.length > 0) {
		for(var i=0;i<src_groups.length;i++) {
			groupId=src_groups[i].properties["cm:authorityName"];
			groupName = src_groups[i].properties["cm:authorityDisplayName"];
			if(groupName!=null && groupName != undefined && groupName != '') {
				nameGroupDisplay.push(groupName);
			}
		}
	}
}
var query = 'TYPE:"pa:paDocument"';
var nodeRef=null;
for(var a=0;a<nameGroupDisplay.length;a++){

//	logger.log("Filter OP idStage:"+ stageId+"NameOperator:"+nameGroupDisplay[a] );
	thirdPartySharedDocumentFilter.projectStages.exact(stageId, EQUALS_TO);
	thirdPartySharedDocumentFilter.thirdPartyName.exact(nameGroupDisplay[a], CONTAINS);
	resultSet = ThirdPartySharedDocumentsService.getListByFilter(thirdPartySharedDocumentFilter);
//	logger.log("=============================");
	for (var i = 0; i<resultSet.result.size(); i++) {
//		logger.log('DOC UUID: ' + resultSet.result.get(i).uuidDocument);

		if(resultSet.result.get(i).uuidDocument!==null){
			flahIdSuc=1;
			for (var b = 0; b < nodes.length; b++) {
				uuid2.push(resultSet.result.get(i).uuidDocument);
				if(nodes[b].toString().trim()+"" == uuid2[0].toString().trim()+""){
//					logger.log("no agrega");
					flahIdSuc=0;
				}
			}
			if(flahIdSuc!=0){
//				logger.log(" agrega");
				nodes.push(resultSet.result.get(i).uuidDocument);
				flahIdSuc=1;
			}

		}

	}

}


for (var x = 0; x < nodes.length; x++) {

//	nodeRef = "workspace://SpacesStore/"+nodes[x];
	query = "@sys\\:node-uuid:" + nodes[x].trim();
//	logger.log("QUERY: "+query);
	var resultset = search.luceneSearch(query);
//	logger.log(resultset.length + " Resultset");
	if(resultset[0] != null && resultset[0] != undefined && resultset[0] != ''){
//		logger.log("push");
		documents.push(resultset[0]);
	}
}








if(documents.length >0){
	model.resultSet = documents;
}else{
	model.resultSet = new Array();
}





