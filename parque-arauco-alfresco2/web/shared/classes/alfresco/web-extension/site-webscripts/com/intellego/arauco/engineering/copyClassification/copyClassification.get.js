var nodeType = args.nodeType ? args.nodeType : null;
var siteId = args.siteId ? args.siteId : null;
var uuidClassification = args.uuidClassification ? args.uuidClassification : null;
var uuidNewParent = args.uuidNewParent ? args.uuidNewParent : null;		


if(nodeType!=null && uuidClassification!=null){
	var url = "/arauco/copyClassification";

	var params = new Array();
	params["nodeType"]=nodeType;
    params["siteId"]=siteId;
	params["uuidClassification"]=uuidClassification;
    params["uuidNewParent"]=uuidNewParent;

	
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");



	model.response = data;
}
