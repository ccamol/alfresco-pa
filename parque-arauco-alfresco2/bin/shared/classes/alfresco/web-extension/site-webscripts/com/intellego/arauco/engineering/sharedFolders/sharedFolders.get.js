var nodeType = args.nodeType ? args.nodeType : null;
var uuidSelectedFolder = args.uuidSelectedFolder ? args.uuidSelectedFolder : null;
var siteId = args.siteId ? args.siteId : null;
var destFolderUUID = args.destFolderUUID ? args.destFolderUUID : null;


if(nodeType!=null && uuidSelectedFolder!=null){
	var url = "/arauco/sharedFolders";

	var params = new Array();
	params["nodeType"]=nodeType;
	params["uuidSelectedFolder"]=uuidSelectedFolder;
    params["siteId"]=siteId;
    params["destFolderUUID"]=destFolderUUID;

	
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");



	model.response = data;
}
