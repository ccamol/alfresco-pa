var uuid= args.uuid ? args.uuid : null;
var nodeType= args.nodeType ? args.nodeType : null;
var nodeId= args.nodeId ? args.nodeId : null;


if(uuid!=null && nodeType!=null && nodeId!=null){
	var url = "/arauco/associatedCount.json?uuid=" + uuid + "&nodeType=" + nodeType + "&nodeId=" + nodeId;
	
	var connector = remote.connect("alfresco");
	var data = connector.call(url);
	model.response = data;
}