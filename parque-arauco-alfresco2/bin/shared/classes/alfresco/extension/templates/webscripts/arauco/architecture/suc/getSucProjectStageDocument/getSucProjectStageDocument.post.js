<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">
var  nodeRef="";
var nodes = null;

var bodyContent = eval('(' + requestbody.content + ')');
var importantDocuments=null;
var idStage= bodyContent.idStage ? bodyContent.idStage : null;
var username=person.properties.userName;
var query = 'TYPE:"pa:paDocument" ';
query = 'TYPE:"pa:paDocument" AND @pa\\:stageID:"'+idStage+'" NOT @cm\\:creator:"'+username+'"';
//if(idStage!='' && idStage!=0 && idStage!= null){
//	query = query + " AND @pa\\:stageID:" + idStage;
	
//	query = query + " AND @pa\\:mallID:" + idProject;
//}

//logger.log(query);
nodes = search.luceneSearch(query);
model.resultSet = nodes;