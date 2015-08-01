var bodyContent = eval('(' + requestbody.content + ')');
var nodeType = bodyContent.nodeType ? bodyContent.nodeType : null;
var projectId = bodyContent.projectId ? bodyContent.projectId : null;
var idProjectType = projectId.substr(6);
var query = 'TYPE:"pa:paDocument"';

if(nodeType !== '' && idProjectType !== ''){
	switch(nodeType){
	case "2":
		query = query + " AND @pa\\:projectID:" + idProjectType + " AND (@pa\\:nodeType:" + nodeType + " OR @pa\\:nodeType:5)";	
		break;
	case "4":
		query = query + " AND @pa\\:projectID:" + idProjectType + " AND (@pa\\:nodeType:" + nodeType + " OR @pa\\:nodeType:7)";
		break;
	case "10":
		query = query + " AND @pa\\:projectID:" + idProjectType + " AND (@pa\\:nodeType:" + nodeType + " OR @pa\\:nodeType:6)";
		break;
	default:
	}
}

var resultSet = search.luceneSearch(query);
model.resultSet = resultSet;
