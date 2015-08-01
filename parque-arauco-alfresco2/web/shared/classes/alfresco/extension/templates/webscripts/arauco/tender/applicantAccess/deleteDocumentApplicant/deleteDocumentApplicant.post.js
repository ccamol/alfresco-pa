function main() {

	var bodyContent = eval('(' + requestbody.content + ')');	
	var uuid = bodyContent.uuid ? bodyContent.uuid : null;
	var id = bodyContent.id ? bodyContent.id : null;
	var status = false;
	if (uuid != null) {
		var query = '@sys\\:node-uuid:' + uuid;
		var resultSet = search.luceneSearch(query);
		if (resultSet.length > 0) {
			var node = resultSet[0];
			logger.log(node);
			node.remove();
			RequestedDocumentApplicantsSrv.remove(RequestedDocumentApplicantsSrv.getById(id).result);
			status = true;
		}else{
			if(RequestedDocumentApplicantsSrv.getById(id).result != null){
				RequestedDocumentApplicantsSrv.remove(RequestedDocumentApplicantsSrv.getById(id).result);
				status = true;
			}
		}
	}

	model.status = status;
}

main();