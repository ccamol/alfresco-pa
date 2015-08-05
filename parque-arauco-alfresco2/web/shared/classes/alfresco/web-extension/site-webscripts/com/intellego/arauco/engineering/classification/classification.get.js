
var newClassification= args.newClassification ? args.newClassification : null;
var uuid= args.uuid ? args.uuid : null;
var siteId= args.siteId ? args.siteId : null;

if(newClassification!=null && uuid!=null && uuid!=null ){
	var url = "/arauco/newClassify";

	var params = new Array();
	params["newClassification"]= newClassification;
	params["uuid"]=uuid;
	params["siteId"]=siteId;
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");


	model.response = data;
}
