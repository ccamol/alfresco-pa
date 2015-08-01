<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">
var  nodeRef="";
var node ="";

var termsName = new Terms();

var bodyContent = eval('(' + requestbody.content + ')');
var importantDocuments=null;
var idProject= bodyContent.idProject ? bodyContent.idProject : null;

var query = 'TYPE:"pa:paDocument"';
if(idProject!='' && idProject!=0 && idProject!= null){
//	query = query + " AND @pa\\:projectID:" + idProject;
	
	query = query + " AND @pa\\:mallID:" + idProject;
}

//logger.log(query);
var nodes = search.luceneSearch(query);

model.resultSet = nodes;

