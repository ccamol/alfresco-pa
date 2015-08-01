var bodyContent = eval('(' + requestbody.content + ')');
var id = bodyContent.id ? bodyContent.id : null;
var nodeType = bodyContent.nodeType ? bodyContent.nodeType : null;
var nodeId = bodyContent.nodeId ? bodyContent.nodeId : null;
var query = null;

if(nodeType!=null && nodeType!=undefined){
	query = 'TYPE:"pa:paDocument"' + ' AND ASPECT:"pa:vigencyData"';
//	logger.log(nodeType);
	switch (nodeType) { 
	case "1":
		query = query + " AND @pa\\:mallID:" + id;
		break;
	case "2":
		break;
	case "3":
		query = query + " AND @pa\\:sectionID:1 AND @pa\\:sucNumberID:" + id;
		break;
	case "4":
		break;
	case "5":
		query = query + " AND @pa\\:stageID:" + nodeId;
		break;
	case "7":
		query = query + " AND @pa\\:sectionID:1 AND  @pa\\:stageID:" + id;
		break;
	case "6":
		query = query + " AND @pa\\:sectionID:1 AND  @pa\\:projectID:" + id;
		break;
	case "9":
		query = query + " AND @pa\\:sectionID:1 AND  @pa\\:mallID:" + id;
		break;
	}
	var resultSet = search.luceneSearch(query);
	model.resultSet = resultSet;
	var currentDate = new Date(); 
	model.date = currentDate;
}

