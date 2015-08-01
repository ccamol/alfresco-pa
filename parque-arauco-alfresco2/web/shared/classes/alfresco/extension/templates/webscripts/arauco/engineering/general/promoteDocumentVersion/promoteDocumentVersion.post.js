var bodyContent = eval('(' + requestbody.content + ')');
var uuid= bodyContent.uuid ? bodyContent.uuid : null;
var description= bodyContent.description ? bodyContent.description : null;
var majorVersion= bodyContent.majorVersion ? bodyContent.majorVersion : null;
var label= bodyContent.label ? bodyContent.label : null;
var workingCopy = false;
var message = null;

if(uuid != null && label!=null){
	if(description == null && description == undefined && description == 'null' && description){
		description = "";
	}
	
	// update main node
	var query = "@sys\\:node-uuid:"+uuid;
	resultSet = search.luceneSearch(query);
	var upload = resultSet[0];
	var theVersion = null;
	var versionNodeRef=null;
	theVersion=upload.getVersion(label);
	versionNodeRef=search.findNode(theVersion.node.nodeRef);
	upload.properties.content.write(versionNodeRef.properties.content);
	if(majorVersion == "true"){
		upload.createVersion(description, true);
	}else if(majorVersion == "false"){
		upload.createVersion(description, false);
	}
	
	//update attachment nodes
	var attachmentNodeRef=null;
	for(var assocNode in resultSet[0].assocs["pa:downlaodAssoc"]){
		attachmentNodeRef=resultSet[0].assocs["pa:downlaodAssoc"][assocNode];
		theVersion=attachmentNodeRef.getVersion(label);
		versionNodeRef=search.findNode(theVersion.node.nodeRef);
		attachmentNodeRef.properties.content.write(versionNodeRef.properties.content);
	}
}

model.status = workingCopy;
